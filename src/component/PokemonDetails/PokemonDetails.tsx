import { useParams} from 'react-router-dom';
import { useState } from 'react';
import { useGetOnePokemon } from '../../hooks/detailPage/useGetOnePokemon';
import PopUp from '../PokemonThumbnails/popUp/PopUp';
import Header from '../PokemonThumbnails/header/Header';
import DetailSpec from './DetailSpec/DetailSpec';


const Details = () => {
    const [popUp,setPopUp] = useState(false);

    const { id } = useParams();
    const pokemon = useGetOnePokemon(id);
    const next = String(Number(id) + 1) ;
    // 一旦試し
    let back = String(Number(id) - 1) ;

    if(back === "0") {
        back = "1";
    }

    const togglePopUp = () => {
        setPopUp(!popUp)
    }

    if(pokemon === undefined){
        return <p>Loading...</p>
    }

    return (
        <>
        <div className="detail">
            <Header click = {togglePopUp}></Header>
            {popUp && (
                    <PopUp></PopUp>
                )}
            <div className="detail__top">
            <a href={back} className="detail__link-nav" ></a>
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
                <a href={`/Details/${next}`} className="detail__link-nav"></a>
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
                            <div className='detail__ability-name'>{pokemon.abilities.map((ability, i) => <p key = {i} className='detail__font'>{ability}</p>)}</div>
                        </div>
                    </div>
                    <div className="detail__spec-container">
                        {pokemon.statsName.map((statsName : any,i) => {
                            return <DetailSpec
                            key = {i}
                            stats = {pokemon.stats[i]}
                            statsName = {statsName}
                            >
                            </DetailSpec>
                        })}
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