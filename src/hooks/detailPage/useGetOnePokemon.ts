import { useState,useEffect} from "react";
import { resJson } from "../../utils/resJson";
import { changeJpPokeName } from "../../utils/changePokeType";

interface pokemon {
    name : string
    image : string
    type : string[]
    typeImage : string[]
    id : number,
    sorting : string
    height : string
    weight : string
    abilities : Array<ability>
    stats : number[]
    statsName : string[]
    flavorArray : Flavor[]
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

interface Ability {
    ability: {
        name: string,
        url: string
    },
    is_hidden: boolean,
    slot: number,
}

interface AbilityFlavor {
    flavor_text: string,
    language:{
    name: string,
    url: string
    },
    version_group:{
    name: string,
    url: string
    }
}

interface Stats {
    base_stat: number,
    effort: number,
    stat:{
    name: string,
    url: string
    }
}

interface ability {
    abilityName : string,
    ability : string
}

interface typeObj {
    slot: number,
    type:{
    name: string,
    url: string
    }
}


export const useGetOnePokemon = (id: string) => {

    const [pokemonData, setPokemonData] = useState<pokemon>();

    useEffect(() => {
        const upDataPoke = async () => {
        const pokeDetail = await getDetails(id);
        setPokemonData({...pokeDetail})};
        upDataPoke();
    },[id]);

    const statsName = ["HP", "こうげき", "ぼうぎょ", "とくこう", "とくぼう", "すばやさ"];


    const getDetails = async (id:string) => {
        const url : string = "https://pokeapi.co/api/v2/pokemon";
        const res = await resJson(`${url}/${id}`);

        const resSpeciesState = await resJson(res.species.url);

        const flavorArray = resSpeciesState.flavor_text_entries.filter((obj : Flavor) => obj.language.name === "ja");

        const typeArray = res.types;
        const pokeTypeArray = typeArray.map((typeObj : typeObj) => changeJpPokeName(typeObj.type.name));
        const ingUrl = "/public/icon_type_";
        const typeImageArray = typeArray.map((typeObj : typeObj) => `${ingUrl}${typeObj.type.name}.svg`);
        console.log(typeImageArray)
        // const pokeType = typeArray.length > 1 ? `${changeJpPokeName(typeArray[0].type.name)} / ${changeJpPokeName(typeArray[1].type.name)}`  : changeJpPokeName(typeArray[0].type.name);

        const abilities : Ability [] = res.abilities;
        const filterAbilities = abilities.filter((obj : Ability) => !(obj.is_hidden));
        const ability= await Promise.all(
            filterAbilities.map(async (obj :Ability) => {
                const resAbility = await resJson(obj.ability.url);
                const abilityFlavorArray =resAbility.flavor_text_entries.filter((obj : AbilityFlavor) => (obj.language.name === "ja"));
                const abilityFlavor = abilityFlavorArray[abilityFlavorArray.length-1].flavor_text.replace(/\r?\n/g, '');

                return {
                    abilityName : resAbility.names[0].name,
                    ability : abilityFlavor
                };
            })
        );


        // const typeImage = 

        const stats = res.stats.map((obj : Stats) => obj["base_stat"]);

        const pokemon ={
            name : resSpeciesState.names[0].name,
            image : res.sprites.other["official-artwork"].front_default,
            type : pokeTypeArray,
            typeImage : typeImageArray,
            id : res.id,
            sorting : resSpeciesState.genera[0].genus,
            height : (res.height / 10).toFixed(1),
            weight : ((res.weight) / 10).toFixed(1),
            abilities : ability,
            stats : stats,
            statsName : statsName,
            flavorArray : flavorArray

        };
        return pokemon;
    };
    return pokemonData;
};