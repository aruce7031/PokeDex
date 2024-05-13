type prop = {
    stats : number;
    statsName : number
}

const DetailSpec = (props :prop) => {
    return (
        <div className="detail__spec">
            <p className="detail__spec-name">{props.statsName}</p>
            <div className="detail__spec-content">
                <ul className="detail__spec-list is-base">
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                    <li className="detail__item-list"></li>
                </ul>
            </div>
        </div>
    )
}

export default DetailSpec;