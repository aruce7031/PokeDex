import { useParams} from 'react-router-dom';
import { useState } from 'react';
import { useGetOnePokemon } from '../../hooks/detailPage/useGetOnePokemon';
import PopUp from '../PokemonThumbnails/popUp/PopUp';
import Header from '../PokemonThumbnails/header/Header';
import DetailSpec from './DetailSpec/DetailSpec';
import { PopUpAbility } from './popUpAbility/PopUpAbility';
import {Link } from "react-router-dom"
import questionIcon from "/public/question.png"

interface PopUpAbilities {
    [key: string]: boolean;
}

const Details = () => {
    const [popUp,setPopUp] = useState(false);
    const [popUpAbility,setPopUpAbility] = useState<PopUpAbilities>({});

    const { id } = useParams();

    const pokemon = useGetOnePokemon(id ?? "1");
    const next = String(Number(id) + 1) ;
    // 一旦試し
    let back = String(Number(id) - 1) ;

    if(back === "0") {
        back = "1";
    }

    const togglePopUp = () => {
        setPopUp(!popUp)
    }

    if(!pokemon){
        return <p>Loading...</p>
    }


    const toggleAbility = (abilityName: string) => {
        setPopUpAbility(prevState => ({
            ...prevState,
            [abilityName]: !prevState[abilityName]
        }));
    };

    return (
        <>
        <div className="detail">
            <Header click = {togglePopUp}></Header>
            {popUp && (
                    <PopUp click = {togglePopUp}></PopUp>
                )}
            <div className="detail__top">
            <Link to={`/Details/${back}`} className="detail__link-nav back-button" />
                <div className="detail__imageContainer">
                    <img src={pokemon.image} alt="" className='detail__image' />
                </div>
                <div className="detail__names">
                    <h2 className='detail__ttl'>
                        <small className='detail__id title-font'>No.{id}</small>
                        <br />
                        <span className='detail__name title-font'>{pokemon.name}</span>
                    </h2>
                </div>
            <Link to={`/Details/${next}`} className="detail__link-nav next-button" />
            </div>
            <div className="detail__infoContainer">
                <div className="detail__info">
                    <div className="detail__features">
                        <p className='detail__sorting detail__font'>分類：{pokemon.sorting}</p>
                        <p className='detail__type detail__font'>タイプ：{pokemon.type}</p>
                        <div className='detail__body'>
                            <p className='detail__height detail__font'>高さ：{pokemon.height}m</p>
                            <p className='detail__weight detail__font'>重さ：{pokemon.weight}kg</p>
                        </div>
                        <div className='detail__ability' >
                            <p className='detail__font'>特性：</p>
                            <div className='detail__ability-name'>{pokemon.abilities.map((ability, i) => {
                                return (
                                    <div key={i} className="detail__ability-container">
                                        <p key = {i+100} className='detail__font'>{ability.abilityName}</p>
                                            <button key={i} className='detail__ability-button' onClick={() => toggleAbility(ability.abilityName)}>
                                                <img src={questionIcon} alt="" />
                                                特性
                                            </button>
                                        {popUpAbility[ability.abilityName] && (
                                            <PopUpAbility key={i+50} name={ability.abilityName} text={ability.ability} click={() => toggleAbility(ability.abilityName)}/>
                                        )}
                                    </div>
                                )})
                                }
                            </div>
                        </div>
                    </div>
                    <div className="detail__spec-container">
                        {pokemon.statsName.map((statsName : any,i) => <DetailSpec key = {i} stats = {pokemon.stats[i]} statsName = {statsName}/>)}
                    </div>
                </div>
                <div className="detail__textBox">
                    <div className="detail__textBox-container">
                        <p className='detail__textBox-text'>
                        {
                            pokemon.flavorArray.length !== 0 ?
                            pokemon.flavorArray[pokemon.flavorArray.length -1 ].flavor_text:
                            "表示できるテキストはありません。"
                        }</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Details;