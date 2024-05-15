import popIcon from "/public/ball.svg";
import searchIcon from "/public/search_icon.png";
import crossIcon from "/public/cross_hoso.png";

type prop = {
    click : () => void;
}

const PopUp = (props : prop) => {
    return (
        <div className="popUp">
            <div className="popUp__main">
                <div className="popUp__header">
                    <div>
                        <p><img src={searchIcon} alt="" className="popUp__image"/></p>
                        <h2>タイプや条件で探す</h2>
                    </div>
                    <img onClick={props.click} src={crossIcon} alt="" className="popUp__image"/>
                </div>
                <div className="p0pUp__search">
                    <div className="popUp__search-container">
                        <h3 className="popUp__search-word search__title">
                            <img src={popIcon} alt="" className="popUp__image"/>
                            フリーワード
                        </h3>
                        <input type="text"  className="popUp__input" placeholder="名前や図鑑番号で探す"/>
                    </div>
                    <div className="popUp__search-container">
                        <h3 className="popUp__search-word search__title">
                            <img src={popIcon} alt="" className="popUp__image"/>
                            タイプ
                        </h3>
                        {/* 画像挿入予定 */}
                    </div>
                    <div className="popUp__search-container">
                        <h3 className="popUp__search-word search__title">
                            <img src={popIcon} alt="" className="popUp__image"/>
                            地方
                        </h3>
                       {/* ボタン挿入予定 */}
                    </div>
                    <div className="popUp__search-container">
                        <h3 className="popUp__search-word search__title">
                            <img src={popIcon} alt="" className="popUp__image"/>
                            特性
                        </h3>
                        {/* 特性 */}
                    </div>
                </div>
                <div className="popUp__footer">
                   <button>検索する</button>
                   <button>条件をリセット</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp;