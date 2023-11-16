import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import '../styles/Login.css'
import axios from "axios"

const Login = () => {
const [formData, setFormData] = useState({
    email: "",
    password: ""
});
const navigate = useNavigate()
const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3000/login", formData);
        console.log(response)
        if (response.data === "Invalid User name or Password"){
            alert("Invalid User name or Password")
        }
        else if (response.data === "Server Busy"){
            alert("Verify your Email ID")
        }
        else if (response?.status){
            localStorage.setItem("userInfo",JSON.stringify(response.data))
            navigate("/Home")
        }
    }
    catch(e){
        console.error("Error during Login", e)
    }
}
const handleChange = (e) => {
    const{name,value}= e.target
    setFormData({...formData, [name]:value})
}
    return (
        <Container>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control  type="email" name="email" value = {formData.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name="password" value = {formData.password} onChange={handleChange} required/>
                </Form.Group>
                <Button variant = "primary" type = "submit">Submit</Button>
            </Form>
            <p>Create an account <Link to= "/">Register</Link></p>
        </Container>
    );
};

export default Login