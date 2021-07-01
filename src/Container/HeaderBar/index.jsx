import React, { Component } from 'react';

import Alert from 'react-bootstrap/Alert'

import './style.css'

class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                        <button type="button" class="btn btn-warning" id="btnCustomized">
                            Click Here
                        </button>
                    </div>
                </Alert>
            </div>
        );
    }
}

export default index;