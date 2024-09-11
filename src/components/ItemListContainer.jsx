
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Container,Row, Col, Card, Button } from "react-bootstrap"
import './itemListContainer.css'
import {
	getFirestore,
	getDoc,
	doc,
	updateDoc,
	collection,
	getDocs,
	query,
	where,
	limit,
	addDoc,
  } from "firebase/firestore";


export default function ItemListContainer(){
    const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		const db = getFirestore();
		const refCollection= !id
		? collection(db,"items")
		:query(collection(db,"items"), where("categoryid", "==", id))


		getDocs(refCollection).then((snapshot) => {
		setItems(
			snapshot.docs.map((doc)=>{
				return {id:doc.id, ...doc.data()}
			})
		)
		})
		.finally(()=>{setLoading(false)})
		}, [id])

	if (loading) return <Container><img src="https://i.gifer.com/ZKZg.gif" alt="loading" /></Container>


	return (
		<Container>
			<h1>productos</h1>
			<Container id="container-main" className="d-flex flex-wrap">
				<Row>
					{items.map((product, index) => (
					<Col md={4} key={product.id} className="mb-4">
						<Card id="card">
						<Card.Img variant="top" src={product.imageid} height="200" />
						<Card.Body>
							<Card.Title>talla: {product.categoryid}</Card.Title>
							<Card.Text>{product.description}</Card.Text>
							<Card.Text>{product.category}</Card.Text>
							<Link to={`/item/${product.id}`}>
							<Button variant="primary">ver más</Button>
							</Link>
						</Card.Body>
						</Card>
					</Col>
					))}
				</Row>
    		</Container>
		</Container>
	)
}