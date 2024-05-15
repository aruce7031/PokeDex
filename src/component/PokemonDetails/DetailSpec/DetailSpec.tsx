
type prop = {
    stats : number;
    statsName : string
}

const DetailSpec = (props :prop) => {
    const baseItemArray = [...Array(15)];
    const valueItemArray = [...Array(Math.floor(props.stats / 15))];

    return (
        <div className="detail__spec">
            <p className="detail__spec-name detail__font">{props.statsName}</p>
            <div className="detail__spec-content">
                <ul className="detail__spec-list">
                    {baseItemArray.map((_,i) => <li key={i} className="detail__item-list"></li>) };
                </ul>
                <ul className="detail__spec-list">
                    {valueItemArray.map((_,i) => <li key={i}  className="detail__item-list is-value"></li>)}
                </ul>
            </div>
        </div>
    )
}

export default DetailSpec;