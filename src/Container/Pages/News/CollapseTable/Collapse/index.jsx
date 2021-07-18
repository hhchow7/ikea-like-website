import React, {useState, useEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import './style.css'

function Collapse(props) {
    const {item} = props
    const [isExpanding, setIsExpanding] = useState(false)

    const clickExpandButton = () => {
        setIsExpanding(!isExpanding);
    }
    
    return (
        <div key={item.id} className="records">
            <div className="row" id="visible-area">
            <div className="date-area">{item.date}</div>
                <div className="title-area">{item.title}</div>
                <div>
                    <button className="expand-btn" onClick={() => {clickExpandButton()}}>
                        {
                            isExpanding?
                            <ExpandLessIcon fontSize="large"/>:
                            <ExpandMoreIcon fontSize="large"/>
                        }
                    </button>
                </div>
            </div>
            {isExpanding &&
                <div className="row" id="hidden-area">
                    <div>{item.content}</div>
                </div>
            }
        </div>
    )
}

export default Collapse;
