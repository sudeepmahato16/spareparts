// src/admin/ProductForm.jsx
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ProductForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} controlId="formProductName">
          <Form.Label column sm="2">
            Product Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter product name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPrice">
          <Form.Label column sm="2">
            Price
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter price" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formProductID">
          <Form.Label column sm="2">
            Product ID
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter product ID" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formDiscount">
          <Form.Label column sm="2">
            Discount
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter discount" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formProductDescription">
          <Form.Label column sm="2">
            Product Description
          </Form.Label>
          <Col sm="10">
            <Form.Control as="textarea" rows={3} placeholder="Enter product description" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formProductImage">
          <Form.Label column sm="2">
            Product Image
          </Form.Label>
          <Col sm="10">
            <Form.Control type="file" />
          </Col>
        </Form.Group>

        <Row>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">
              Add Product
            </Button>
            <Button variant="secondary" className="ml-2">
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ProductForm;
