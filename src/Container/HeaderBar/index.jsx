import React from 'react';

import Alert from 'react-bootstrap/Alert'

import './style.css'

export default function HeaderBar(props)  {

    return (
        <div>
            <Alert 
                variant="danger" 
                // onClose={() => setShow(false)} 
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
        </div>
    );
}