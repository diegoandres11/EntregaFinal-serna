
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Container, Card, Button } from "react-bootstrap"
import data from "../data/products.json"

export default function ItemListContainer(){
    const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		new Promise((resolve,reject)=>{
			setTimeout(()=>resolve(data), 2000)
		})
		.then((response)=> {
			if (!id){
				setItems(response)
			}else{
				let filtered= response.filter((i) => i.category===id)	
				setItems(filtered)
				console.log("fitaddoo")
			}
			
		})
		.finally(()=>setLoading(false))}, [id])

	if (loading) return <Container><img src="https://i.gifer.com/ZKZg.gif" alt="loading" /></Container>

	return (
		<Container>
			<h1>productos</h1>
			<Container className="d-flex flex-wrap">
				{items.map(product => (
					<Card key={product.id} style={{ flex: 1 }}>
						<Card.Img variant="top" src={product.img} height="200" />
						<Card.Body>
							<Card.Title>{product.name}</Card.Title>
							<Card.Text>{product.detail}</Card.Text>
							<Card.Text>{product.category}</Card.Text>
							<Link to={`/item/${product.id}`}>
								<Button variant="primary">ver mas</Button>
							</Link>
						</Card.Body>
					</Card>
				))}
			</Container>
		</Container>
	)
}