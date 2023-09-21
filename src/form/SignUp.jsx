import React from 'react'
import styled from 'styled-components'
import { LiaUserShieldSolid } from "react-icons/lia"
import { AiOutlineMail } from "react-icons/ai"
import { BiSolidLockAlt } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

const Container = styled.section`
display:flex;
justify-content:center;
align-items: center;
width: 100vw;
height:100vh;


`
const Avatar = styled(LiaUserShieldSolid)`
border: 5px solid #343636;
color: #b0b0ad;
border-radius: 50%; 
padding: 3px;
`
const Form = styled.form`
background: rgb(253, 253, 253);
border-radius: 15px;
border: 1px solid #c6c7c7;
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
background: #343636;
color: #fff;
font-size: 1.2rem;
transition:.5s ease all ;

`
const Link = styled.a`
text-decoration:none;
color:#05bfa0
`

const SignUp = () => {

  const navigate = useNavigate()
  function handleSubmit(){
    navigate("/login")
  }
  return (
    <Container>
      <Form>
        <Avatar size={60} />
        <InputContainer>
          <AiOutlineMail size={30} color='#23bba2' />
          <Input type="email" placeholder="Email" />
        </InputContainer>
        <InputContainer>
          < BiSolidLockAlt size={30} color='gray' />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <InputContainer>
          < BiSolidLockAlt size={30} color='gray' />
          <Input type="password" placeholder="Confirm Password" />
        </InputContainer>
        <SubmitBtn onClick={handleSubmit}>Sign Up</SubmitBtn>
        <p> <em>Already Have an Account? <Link href="http://">Log In</Link></em></p>
      </Form>
    </Container>
  )
}

export default SignUp