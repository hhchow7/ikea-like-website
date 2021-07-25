import React, {useEffect,useState} from 'react'

import CollapseTable from './CollapseTable'
import axios from '../../../api';

function News() {

    const [news, setNews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/news');
            setNews(response.data)
        }
        fetchData()
    }, []);

    return (
        <div className="section-wrapper">
            <div className="text-left mb-3">
                <span className="section-header">News</span>
            </div>
            <div>           
                <CollapseTable items={news}/>
            </div>
        </div>  
    )
}

export default News
