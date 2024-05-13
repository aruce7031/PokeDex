import { useParams} from 'react-router-dom';
import { useState } from 'react';
import { useGetOnePokemon } from '../../hooks/detailPage/useGetOnePokemon';
import PopUp from '../PokemonThumbnails/popUp/PopUp';
import Header from '../PokemonThumbnails/header/Header';
import DetailSpec from './DetailSpec/DetailSpec';



const Details = () => {
    // これをuseGetPokemonの引数に
    const [popUp,setPopUp] = useState(false);

    const { id } = useParams();
    //stateを宣言するのではなくなんとかここのステータスを持って来れるようにした方が良い
    // useGetPokemonで処理を追加する
    // 引数があるのかないのかで状態を遷移すると良いのではないか
    const pokemon = useGetOnePokemon(id);

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
            </div>
            <div className="detail__infoContainer">
                <div className="detail__info">
                    <div className="detail__features">
                        <p className='detail__sorting detail__font'>分類：{pokemon.sorting}</p>
                        <p className='detail__type detail__font'>タイプ：{pokemon.type}</p>
                        <div className='detail__body'>
                            {/* 一桁の場合0.数字のようにする必要がある。
                            また二桁の場合には間に小数点をつける必要がある */}
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
                    {/* {stats} : Array<></>stats = {pokemon.stats} */}
                </div>
                <div className="Ddtail__textBox">
                    <div className="detail__textBox-container">
                        <p className='detail__textBox-text detail__font'>テスト</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Details;