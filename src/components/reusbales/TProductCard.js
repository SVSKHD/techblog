import { Card, Button, Badge } from "react-bootstrap"
const TProductCard = () => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <div className="row">
                        <div className="col">

                            <h4>Card Title</h4>

                        </div>
                        <div className="col text-end">
                            <h4><Badge bg="success">hello</Badge></h4>
                        </div>
                    </div>

                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default TProductCard