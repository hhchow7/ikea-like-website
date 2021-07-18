import React from 'react'

import CollapseTable from './CollapseTable'

function News() {
    const data = [
        {id: 1, date: '07-07-2021', title: "topic 1", content: "content 1"},
        {id: 2, date: '08-07-2021', title: "topic 2", content: "content 2"}
    ];

    return (
        <div className="section-wrapper">
            <div className="text-left mb-3">
                <span className="section-header">News</span>
            </div>
            <div>           
                <CollapseTable items={data}/>
            </div>
        </div>  
    )
}

export default News
