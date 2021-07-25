import React from 'react'
import {Link} from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';

import './style.css'

export default function Product(props) {

    const {id ,imgSrc, imgAlt, name, description, price} = props

    return (
        <>
        <div className="card mb-3 border-0">
            <div className="card-header bg-transparent border-0 img_container">
                <a href="#">
                    <img src={imgSrc} alt={imgAlt}/>
                </a>
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <h4 className="card-text">{price}</h4>
            </div>
            <div className="card-footer bg-transparent border-0">
            <Link to={`/products/${id}`}>
                <button type="button" className="btn border px-4 py-2">
                    <span className="mr-2">
                        <VisibilityIcon/>
                    </span>
                    <span>
                        View
                    </span>
                </button>
            </Link>
            </div>
        </div>
        </>
    )
}

