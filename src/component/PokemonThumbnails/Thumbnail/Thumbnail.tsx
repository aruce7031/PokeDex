import {Link } from "react-router-dom"

type Props ={
    name : string
    image : string
    id : number,
}

const Thumbnail = (props :Props) => {
    return (
        <div className="thumbnail">
            <Link to= {`Details/${props.id}`} className="Detail__link">
                <div className="thumbnail-container">
                    <div className="thumbnail__id">No.{props.id}</div>
                    <img className="thumbnail__image"  src={props.image} alt="" />
                    <div className="thumbnail__data">
                        <h3>{props.name}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Thumbnail;