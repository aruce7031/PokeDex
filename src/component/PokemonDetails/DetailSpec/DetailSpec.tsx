
type prop = {
    stats : number;
    statsName : number
}

const DetailSpec = (props :prop) => {
    // ここにループ
    return (
        <div className="detail__spec">
            <p className="detail__spec-name detail__font">{props.statsName}</p>
            <div className="detail__spec-content">
                <ul className="detail__spec-list">
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
                <ul className="detail__spec-list">
                    {/* ここループで行けたらいい */}
                    {/* ここ確認したい */}
                    {[...Array(Math.floor(props.stats / 15))].map((undefined,i) => {
                        return  <li key = {i} className="detail__item-list is-value"></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default DetailSpec;