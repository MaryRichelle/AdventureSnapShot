import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LiaUserShieldSolid } from "react-icons/lia"
import { AiOutlineMail } from "react-icons/ai"
import { FaKey } from "react-icons/fa"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Authentication/Firebase"

const Container = styled.section`
display:flex;
justify-content:center;
align-items: center;
width: 100vw;
height:100vh;
`
const Avatar = styled(LiaUserShieldSolid)`
border: 5px solid #23bba2;
color: #b0b0ad;
border-radius: 50%; 
padding: 3px;
`
const Form = styled.form`
background: rgb(242, 242, 242);
border: 1px solid #c6c7c7;
border-radius: 15px;
width:max(50%,20rem);
height:60%;
display: flex;
flex-direction:column;
align-items:center;
justify-content: space-around;
padding:10px;

`


const InputContainer = styled.label`
background: #fff;
width:100%;
border: 1px solid #c6c7c7;
outline:none;
border-radius: 4px;
display: flex;
align-items:center;
padding:5px;
gap:2rem;`

const Input = styled.input`
width:100%;
border:none;
outline:none;
border-radius: 4px;
font-weight: 600;
color:gray;
font-family:normal;

`
const SubmitBtn = styled.button`
width:100%;
outline:none;
border-radius: 4px;
cursor: pointer;
padding:15px;
font-weight: 800;
border:1px solid gray;
background: #23bba2;
font-size: 1.2rem;
transition:.5s ease all ;

`

const ErrorSpan = styled.span`
color: #f51f1f
`
const P = styled.p`
color:black;
`
const Links = styled(Link)`
text-decoration:none;
color:#05bfa0;
cursor: pointer;
`


const LogInform = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleLogIn = function (e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigate("/gallery")
        }
      })
      .catch((error) => {
        setError(true)
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }



  return (
    <Container>
      <Form onSubmit={handleLogIn}>
        <Avatar size={60} />
        {error &&
          <ErrorSpan>Email or Password didn't Match</ErrorSpan>
        }
        <InputContainer>
          <AiOutlineMail size={30} color='#23bba2' />
          <Input type="email" required name="email" onChange={e => { setEmail(e.target.value) }} placeholder="Email" />
        </InputContainer>
        <InputContainer>
          < FaKey size={30} color='gray' />
          <Input type="password"
            name="password" required placeholder="Password" onChange={e => { setPassword(e.target.value) }} />
        </InputContainer>
        <SubmitBtn type="submit">Log In</SubmitBtn>
        <P> Don't Have an Account? </P>
        <Links to="/signup">SIgn Up</Links>

      </Form>
    </Container>
  )
}

export default LogInform