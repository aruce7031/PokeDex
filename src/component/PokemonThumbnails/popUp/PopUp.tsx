import popIcon from "/public/ball.svg";

const PopUp = () => {
    return (
        <div className="popUp">
            <div className="popUp__main">
                <div className="popUp__header">
                    <h2>タイプや条件で探す</h2>
                    <p><img src="../../../public/search_icon.png" alt="" className="popUp__image"/></p>
                </div>
                <div className="pupUp__search">
                    <h3 className="popUp__search-word">
                        <img src={popIcon} alt="" className="popUp__image"/>
                        フリーワード
                    </h3>
                    <input type="text"  className="popUp__input"/>
                </div>
            </div>
        </div>
    )
}

export default PopUp;