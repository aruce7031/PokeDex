import icon from "/public/search_icon.svg"


type prop = {
    click : () => void;
}

const Header = (props : prop) => {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__title">
                        <p>ポケモン図鑑</p>
                    </div>
                    <div className="header__search">
                        <img className="header__search-icon" src={icon} alt="" onClick={props.click} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;