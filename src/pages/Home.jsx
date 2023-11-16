import React, {useEffect, useState} from "react"
import {Container,Button} from "react-bootstrap"
import "../styles/Home.css"
import axios from "axios"

const Home = () => {

    const [res,setRes]= useState({})

    const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(false);

    useEffect(() => {
    if (isLocalStorageAvailable) {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        if (user && user.tokens) {
        getData(user.tokens);
        }
    }
    }, [isLocalStorageAvailable]);

    useEffect(() => {
    if (!isLocalStorageAvailable) {
        setIsLocalStorageAvailable(true);
    }
    }, []);

    const getData = async(token)=>{
        try{
            const config = {
                headers:{
                    Authorization:token
                }
            }
            const response = await axios.get("http://localhost:3000/home", config)
            console.log(response);

            if (response === "Invalid Token"){
                alert("Login again")
            }
            else if (response === "Server Busy"){
                alert("Unauthorised access")
            }
            else if(response?.status){
                setRes(response.data)
            }
        }

        catch(e){
            console.error(e)
        }
    }

    return(
        <Container>
        <p>Hi {res.name},</p>
        <h1>Welcome to the Home Page </h1>
        <Button> Get Started</Button>
    </Container>
    );
}

export default Home