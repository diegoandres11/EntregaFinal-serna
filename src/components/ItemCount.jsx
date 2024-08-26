import { useState } from "react"

export const ItemCount=({stock, onAdd})=>{
    const [count, setCount]=useState(1)

    const handleIncrease=()=>{
        if(count<stock){
            setCount((prev)=> prev+1)
        }
    }

    const handleDecrease=()=>{
        if(count>1){
            setCount((prev)=> prev-1)
        }
    }

    const handleAdd=()=>{
        onAdd(count)
        setCount(1)
    }


    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <button style={{ color: 'white',  border: 'none',padding: '10px 20px', borderRadius: '5px',cursor: 'pointer', backgroundColor:'#343a40'}} onClick={handleIncrease}>+</button>
            <span style={{padding:'1%'}}>{count}</span>
            <button style={{ color: 'white',  border: 'none',padding: '10px 20px', borderRadius: '5px',cursor: 'pointer', backgroundColor:'#343a40'}} onClick={handleDecrease}>-</button>
            <button style={{ color: 'white',  border: 'none',padding: '10px 20px', borderRadius: '5px',cursor: 'pointer', backgroundColor:'#343a40', marginLeft:'1%'}} onClick={handleAdd}>Agregar al carrito</button>
        </div>

    )
    
}