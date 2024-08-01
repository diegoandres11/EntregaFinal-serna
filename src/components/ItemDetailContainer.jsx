
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
{/** */}import {Container} from "react-bootstrap"
import data from "../data/products.json"

export default function ItemDetailContainer(){
    const [item, setItem] = useState(null)
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		new Promise((resolve,reject)=>{
			setTimeout(()=>resolve(data), 2000)
		})
		.then((response)=> {
				const finded= response.find((i) => i.id===Number(id))	
				setItem(finded)
			
		})
		.finally(()=>setLoading(false))}, [id])

	if (loading) return <Container><img src="https://i.gifer.com/ZKZg.gif" alt="loading" /></Container>

	return (
		<Container className="mt-4">
			<h1>producto</h1>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} height={200} />
            <h4>talla: {item.category}</h4>
            <p>{item.detail}</p>
			
		</Container>
	)
}