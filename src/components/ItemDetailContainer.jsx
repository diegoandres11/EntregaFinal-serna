
import {useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {Container} from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { getFirestore, getDoc, doc, count } from "firebase/firestore"
import { ItemsContext } from "../contexts/ItemsContexts"
import { ItemCount } from "./ItemCount"
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

export default function ItemDetailContainer(){
    const [item, setItem] = useState(null)
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	
	const {addItem}=useContext(ItemsContext)

	const onAdd=(count)=>{
		addItem({...item, quantity: count })
	}

	useEffect(() => {
		const db=getFirestore()
		const refDoc=doc(db, "items", id)
		getDoc(refDoc).then((snapshot)=>{
			setItem({id: snapshot.id, ...snapshot.data()})
		})
		.finally(()=>setLoading(false))}, [id])

	if (loading) return <Container><img src="https://i.gifer.com/ZKZg.gif" alt="loading" /></Container>

	return (
		<Container className="mt-4">
			<h1>producto{/*{value} */}</h1>
			<Card style={{display:'flex', flexDirection:'row'}} className="bg-dark text-white" >
				<img src={item.imageid} height={270} width={400}/>
				<div style={{display:'flex', flexDirection:'column', marginLeft:'20%', alignItems:'center'}}>
					<Card.Title>{item.title}</Card.Title>
					<Card.Text>
					{item.description}
					</Card.Text>
					<Card.Text>talla: {item.categoryid}</Card.Text>
					<Card.Text>stock disponible: {item.stock}</Card.Text>
				</div>
				
					
    		</Card>
			<ItemCount stock={item.stock} onAdd={onAdd}/>
			
			
		</Container>
	)
}