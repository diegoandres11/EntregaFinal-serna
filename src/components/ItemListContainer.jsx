import Container from 'react-bootstrap/Container';

export default function ItemListContainer({greeting}){
    return(
        <Container>
            <h1>{greeting}</h1>
        </Container>
    ) 
}