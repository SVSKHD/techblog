import Form from 'react-bootstrap/Form';
const TINput = ({ displayLabel, value, handleChange, placeholder, address, type }) => {
    return (
        <>
            <Form>
                {address ? (
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{displayLabel}</Form.Label>
                        <Form.Control as="textarea" rows={3} value={value} placeholder={placeholder} onChange={handleChange} />
                    </Form.Group>
                ) : (
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{displayLabel}</Form.Label>
                        <Form.Control type={type} value={value} placeholder={placeholder} onChange={handleChange} />
                    </Form.Group>
                )}
            </Form>
        </>
    )
}
export default TINput