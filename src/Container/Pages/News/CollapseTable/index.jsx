import React from 'react'
import './style.css'

import Collapse from './Collapse'

function CollapseTable(props) {
    const {items} = props;
    
    return (
        <div className="table">
            {
                items.map(item => {
                    return (
                        <Collapse item={item}/>
                    )
                })
            }
        </div>
    )
}

export default CollapseTable
