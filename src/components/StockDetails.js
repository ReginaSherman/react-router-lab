import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/stock-data.json'


const StockDetails = () => {
    const [ stocks, setStocks ] = useState(data)
    let { symbol } = useParams() 

    const url = `https://cloud.iexapis.com/stable/stock/`
    const key = process.env.REACT_APP_LAB_KEY
    let newURL = `${url}${symbol}/${key}`
    console.log(newURL)
    useEffect (() => {
        fetch(newURL)
        .then((res) => res.json())
        .then((json) => setStocks(json))
    }, [])

        return (
            <div>
                <h1>{ stocks.companyName }</h1>
                <h2>Last Price: { stocks.latestPrice }</h2>
               <h2>Change: { stocks.change }</h2>
            </div>
        )
    }



export default StockDetails