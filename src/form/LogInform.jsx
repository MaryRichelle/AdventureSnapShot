import React, { useState } from 'react'
import styled from 'styled-components'
import { LiaUserShieldSolid } from "react-icons/lia"
import { AiOutlineMail } from "react-icons/ai"
import { FaKey } from "react-icons/fa"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Authentication/Firebase"
import { useNavigate } from 'react-router-dom'

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
width:60%;
height:60%;
display: flex;
flex-direction:column;
align-items:center;
justify-content: space-around;
padding:10px;

`


const InputContainer = styled.div`
background: #fff;
width:100%;
border: 1px solid #c6c7c7;
outline:none;
border-radius: 4px;
display: flex;
align-items:center;
padding:5px;
`
const Input = styled.input`
width:100%;
border:none;
outline:none;
border-radius: 4px;
font-weight: 600;
color:gray;
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
color: #fff;
font-size: 1.2rem;
transition:.5s ease all ;

`
const Link = styled.a`
text-decoration:none;
color:#05bfa0
`
const ErrorSpan = styled.span`
color: #f51f1f
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
        // Signed in 
        const user = userCredential.user;
        navigate("/gallery")
      })
      .catch((error) => {
        setError(true)
        const errorCode = error.code;
        const errorMessage = error.message;
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
          <Input type="email" name="email" onChange={e => { setEmail(e.target.value) }} placeholder="Email" />
        </InputContainer>
        <InputContainer>
          < FaKey size={30} color='gray' />
          <Input type="password"
            name="password" placeholder="Password" onChange={e => { setPassword(e.target.value) }} />
        </InputContainer>
        <SubmitBtn type="submit">Log In</SubmitBtn>
        <p> <em>Don't Have an Account? <Link href="http://">SIgn Up</Link></em></p>

      </Form>
    </Container>
  )
}

export default LogInform