import { useState,useEffect} from "react";
import { resJson } from "../../utils/resJson";
import { changeJpPokeName } from "../../utils/changePokeType";

type obj ={
    name : string
    image : string
    type : string
    id : number,
    sorting : string
    height : string
    weight : string
    abilities : Array<string>
    stats : Array<number>
    statsName : Array<string>
    flavorArray : any
}

interface Flavor {
    flavor_text: string
    language: {
        name: 'ja'|'en'
        url: string
    }
    version: {
        name: string
        url: string
    }
}


export const useGetOnePokemon = (id : string | undefined) => {

    const [pokemonData, setPokemonData] = useState<obj>();

    useEffect(() => {
        const sample = async () => {
        const pokeDetail = await getDetails()
        setPokemonData({...pokeDetail})
        }
        sample();
    },[]);

    const statsName = ["HP", "こうげき", "ぼうぎょ", "とくこう", "とくぼう", "すばやさ"];

    const getDetails = async () => {
        const url : string = "https://pokeapi.co/api/v2/pokemon";
        const res = await resJson(`${url}/${id}`);
        const speciesState = await resJson(res.species.url);
        const flavorArray = speciesState.flavor_text_entries.filter((obj : Flavor) => obj.language.name === "ja");
        console.log(flavorArray);
        const typeArray = res.types;
        const pokeType = typeArray.length > 1 ? `${changeJpPokeName(typeArray[0].type.name)} / ${changeJpPokeName(typeArray[1].type.name)}`  : changeJpPokeName(typeArray[0].type.name);
        const abilities : Array<object>= res.abilities;
        const ability = abilities.filter((obj : any) => !(obj.is_hidden));
        const abilityResult = await Promise.all(
            ability.map(async (obj :any) => {
                const resAbility = await resJson(obj.ability.url);
                return resAbility.names[0].name;
            })
        );

        const stats = res.stats.map((obj : any) => obj["base_stat"]);

        const obj ={
            name : speciesState.names[0].name,
            image : res.sprites.other["official-artwork"].front_default,
            type : pokeType,
            id : res.id,
            sorting : speciesState.genera[0].genus,
            height : (res.height / 10).toFixed(1),
            weight : ((res.weight) / 10).toFixed(1),
            abilities : abilityResult,
            stats : stats,
            statsName : statsName,
            flavorArray : flavorArray

        }

        return obj;
    }


    return pokemonData;
}



