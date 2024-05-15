import crossIcon from "/public/cross_hoso.png";

interface prop {
    name : string
    text : string
    click : () => void;
}

export const PopUpAbility = (props : prop) => {
    return (
        <>
            <div className="abilityText">
                <div className="abilityText-container">
                    <div className="abilityText__header">
                        <p className="abilityText__header-text">{props.name}</p>
                        <img src={crossIcon} alt=""  className="popUp__image" onClick={props.click}/>
                    </div>
                    <div className="abilityText__main">
                        <p className="abilityText__main-text">{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}