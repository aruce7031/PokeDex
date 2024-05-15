import { useRef, useState} from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import Header from "./header/Header";
import { useGetPokemon } from "../../hooks/topPage/useGetPokemon";
import PopUp from "./popUp/PopUp";

interface Pokemon {
    name : string,
    image : string,
    id : number,
}

const PokemonThumbnails = () => {
    const bottomRef = useRef<HTMLDivElement>(null);
    const pokemons= useGetPokemon(bottomRef);

    const [popUp,setPopUp] = useState(false);

    const togglePopUp = () => {
        setPopUp(!popUp)
    }

    return (
        <div className="container">
            <Header click = {togglePopUp}></Header>
            {popUp && (
                    <PopUp click = {togglePopUp}></PopUp>
                )}
            <div className="main-container">
                {pokemons.map((obj : Pokemon) => <Thumbnail key={obj.id} name={obj.name} image = {obj.image} id = {obj.id}/>)}
                <div ref={bottomRef} />
            </div>
        </div>
    )
}

export default PokemonThumbnails;