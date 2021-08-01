import React from 'react';
import Alert from 'react-bootstrap/Alert'

import {useSelector, useDispatch} from 'react-redux'
import {closeHeaderBar} from '../../redux/actions'

import './style.css'

export default function HeaderBar(props)  {

    const dispatch = useDispatch()
    const shouldCloseHeaderBar = useSelector(state => state.closeHeaderBar)

    return (
        <>
            <Alert 
                variant="danger" 
                show={!shouldCloseHeaderBar}
                onClose={()=>{dispatch(closeHeaderBar())}} 
                className = "alertArea"
                classes={{ close: 'my-class-name' }}
                dismissible
            >
                <div id="row">
                    <span id="message">
                    Sale - From now till Jul 21, over 1,000 products up to 60% off!
                    </span>
                    <button type="button" className="btn btn-warning" id="btnCustomized">
                        Click Here
                    </button>
                </div>
            </Alert>
        </>
    );
}