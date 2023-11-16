import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import '../styles/SignUp.css'
import axios from "axios"

const SignUp = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
})
const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3000/signup/verify", formData);
        if (response.data === true){
            alert("Registration link is sent to your email id")
        }
        else if (response.data === false){
            alert("User already exists")
        } 
    }
    catch(e){
        console.error("Error during Registration",e)
    }
    
}
const handleChange = (e) => {
    const{name,value}= e.target
    setFormData({...formData, [name]:value})
}
    return (
        <Container>
            <h1>Registration Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control  type="text" name="name" value = {formData.name} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control  type="email" name="email" value = {formData.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="text" name="password" value = {formData.password} onChange={handleChange} required/>
                </Form.Group>
                <Button variant = "primary" type = "submit">Submit</Button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </Form>
        </Container>
    )
}

export default SignUp