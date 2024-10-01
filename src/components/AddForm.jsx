import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/theme.context';

function AddForm() {

  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <Form className='m-3' data-bs-theme={isDarkTheme ? "dark" : "light"}>
      
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

      <Button className={`mt-3 ${isDarkTheme ? "dark-theme-btn" : "light-theme-btn"}`}>Add new Book</Button>

    </Form>
  )
}

export default AddForm