import React from 'react'
import { Link } from 'react-router-dom'



const Stock = ({information}) => {
    
    return (
        <section className='container'>
            {information.map(info => {
                return (
                    <div key={ info.symbol }>
                <h5 className='stockName'>{ info.name } - 
                <Link to={ '/stock/' + info.symbol }><button>{ info.symbol }</button></Link></h5>
                    </div>

                )
            })}
            
        </section>
        
    )
}

export default Stock