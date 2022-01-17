import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/stock-data.json'


const StockDetails = () => {
    const [ stocks, setStocks ] = useState(data)
    let { symbol } = useParams() 

    const url = `https://cloud.iexapis.com/stable/stock`
    const key = process.env.REACT_APP_LAB_KEY
    let newURL = url + symbol + key

    useEffect (() => {
        fetch(newURL)
        .then((res) => res.json())
        .then((json) => setStocks(json))
        .catch((err) => console.log('No stock available'))
    }, [])
        return (
            <div className='details-container'>
                {stocks.map((item) => {
                    if(item.symbol === symbol) {
                    return (
                    <>
                        <h1>{ item.name }</h1>
                        <h2>{ item.symbol }</h2>
                        <h2>{ item.lastPrice }</h2>
                        <h2>{ item.open }</h2>
                        <h2>{ item.high }</h2>
                        <h2>{ item.low }</h2>
                        <h2>{ item.change }</h2>
                    </>
                    )}
                })}
            </div>
        )
    }



export default StockDetails