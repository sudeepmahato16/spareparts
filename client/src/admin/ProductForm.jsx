// src/admin/ProductForm.jsx
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { addProduct } from "../services/product";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("helmet");

  const onAdd = async (e) => {
    e.preventDefault();
    try {
      
  
    const product = await addProduct({
      name,
      price: +price,
      category,
      image,
    });

    console.log(product);
    alert("Product is added");

  } catch (error) {
      alert(error.message)
  }

  }


  return (
    <Container>
      <Form>
        <Form.Group as={Row} controlId="formProductName">
          <Form.Label column sm="2">
            Product Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" value={name} placeholder="Enter product name" onChange={(e) => {
              setName(e.target.value)
            }}  />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPrice">
          <Form.Label column sm="2">
            Price
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="Enter price" value={price} onChange={(e) => {
              setPrice(e.target.value)
            }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPrice">
          <Form.Label column sm="2">
            Category
          </Form.Label>
          <Form.Select aria-label="Default select example" value={category} onChange={(e) => {
            setCategory(e.target.value)
          }}>
            <option value="helmet">helmet</option>
            <option value="gears">gears</option>
            <option value="tyres">tyres</option>
            <option value="autoparts">autoparts</option>
            <option value="accesssories">accesssories</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Row} controlId="formProductImage">
          <Form.Label column sm="2">
            Product Image
          </Form.Label>
          <Col sm="10">
            <Form.Control type="file" accept="image/*"  onChange={(e) => {
              setImage(e.target.files[0])
     
            }} />
          </Col>
        </Form.Group>

        <Row>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit" onClick={onAdd}>
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
