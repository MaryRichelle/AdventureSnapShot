import React, { useState } from 'react'
import styled from 'styled-components'
import { LiaUserShieldSolid } from "react-icons/lia"
import { AiOutlineMail } from "react-icons/ai"
import { BiSolidLockAlt } from "react-icons/bi"
import { useNavigate, Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
background: rgb(253, 253, 253);
border-radius: 15px;
border: 1px solid #c6c7c7;
width:max(50%,20rem);
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
gap:1rem;
`
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
const P = styled.p`
color:black;
`
const Links = styled(Link)`
text-decoration:none;
color:#05bfa0;
cursor: pointer;
`

const ErrorSpan = styled.span`
color: #f51f1f
`

const SignUp = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")


  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim())
  }


  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }





  const handleSignUp = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user);
          if (user) {
            navigate("/login")
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({ errorCode }, { errorMessage });
          setError(error.message)
          // ..
        });
    } else {

      setError("password did not match try again")
    }
  }
  return (
    <Container>
      <Form>
        <Avatar size={60} />
        {error &&
          <ErrorSpan>{error}</ErrorSpan>
        }
        <InputContainer>
          <AiOutlineMail size={30} color='#23bba2' />
          <Input type="email" placeholder="Email" onChange={handleEmailChange} />
        </InputContainer>
        <InputContainer>
          < BiSolidLockAlt size={30} color='gray' />
          <Input type="password" placeholder="Password" onChange={handlePassword} />
        </InputContainer>
        <InputContainer>
          < BiSolidLockAlt size={30} color='gray' />
          <Input type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} />
        </InputContainer>
        <SubmitBtn onClick={handleSignUp}>Sign Up</SubmitBtn>
        <P> <em>Already Have an Account?</em> </P>
        <Links to="/login">Log In</Links>
      </Form>
    </Container>
  )
}

export default SignUp