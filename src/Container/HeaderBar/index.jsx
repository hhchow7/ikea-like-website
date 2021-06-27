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
                    dismissible
                >
                    <div id="row">
                        <span id="message">
                            Change this and that and try again. Duis mollis, est non commodo
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