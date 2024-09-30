import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddForm() {
  return (
    <Form className='m-3' >
      
      <Form.Group>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control type="text" name="title"/>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control type="text" name="description"/>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Control type="text" name="content"/>
      </Form.Group>

      <Button variant="warning" className='mt-3'>Add new Book</Button>

    </Form>
  )
}

export default AddForm