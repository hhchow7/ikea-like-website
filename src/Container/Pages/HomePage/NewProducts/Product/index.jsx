import React, { Component } from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';

import './style.css'

export class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {imgSrc, imgAlt, name, description, price} = this.props

        return (
            <>
            <div className="card mb-3 border-0" style={{maxWidth: "18rem"}}>
                <div className="card-header bg-transparent border-0 img_container">
                    <a href="#">
                        <img  src={imgSrc} alt={imgAlt}/>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h4 className="card-text">{price}</h4>
                </div>
                <div className="card-footer bg-transparent border-0">
                     <button type="button" class="btn border px-4 py-2">
                        <span className="mr-2">
                            <VisibilityIcon/>
                        </span>
                        <span>Quick View</span>
                    </button>
                </div>
            </div>
            </>
        )
    }
}

export default Product
