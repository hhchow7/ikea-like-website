import React, {useState, useEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import './style.css'

function CollapseTable(props) {
    const {data} = props;
    const [isExpanding, setIsExpanding] = useState(false)
    const [items, setItems] = useState(data)

    const clickExpandButton = () => {
        setIsExpanding(!isExpanding);
    }

    useEffect(() => {
        if (items) {
            
            // let newItems = items.map(item => {
            //     let newItem = {
            //         ...item,
            //         expand: false
            //     }
            //     return newItem
            // })
            // console.log(newItems)
            // setItems(newItems)
        //   setCount(activeSym);
        }
      }
      , [items]
    )


    return (
        <div className="table">
            {
                items.map(row => {
                    return (
                        <div key={row.id} className="records">
                            <div className="row" id="visible-area">
                            <div className="date-area">{row.date}</div>
                                <div className="title-area">{row.title}</div>
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
                                <div className="row bg-dark" id="hidden-area">
                                    <div>{row.content}</div>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CollapseTable
