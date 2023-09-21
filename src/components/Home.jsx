import React from 'react'
import { MdCameraOutdoor } from "react-icons/md"
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Container = styled.main`
 width: 90vw;
 height: 100vh;
 margin-top: 8rem;
 margin:auto;
 display: flex;
 justify-content:space-around;
 align-item:center;
 `

const LeftSection = styled.section`
 display: flex;
 justify-content: space-around;
 align-items:center;
 flex-direction: column;
 gap:6rem;
 `
 const H1 = styled.h1`
 font-size:3rem;
 
 `
 const SubHeading= styled.p`
 font-size:2rem;
 transform: SkewY(-8deg);
 color:#0d806d;
 `
const RightSide = styled.section`
margin:auto;
 display: flex;
 justify-content: space-around;
 align-items:center;
 flex-direction: column;
 gap:6rem;
 `
const ButtonContainer = styled.div`
display: flex;
 width: 50%;
 display:flex;
 justify-content: space-around;
 align-items: center;

`
const Button = styled(Link)`
 background: #343636;
 color: #fff;
 text-decoration: none; 
padding: .5rem;
border-radius: 10px;
 `
const ImageWrapper = styled.div`
border:1px solid #cbc8c8;
margin:auto;
width: 20rem;
height: auto;
 display:flex;
 flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:10px;
    transform: SkewY(5deg);
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
&:hover {
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
 }
`
const ImageWrapper2 = styled.div`
border:1px solid #cbc8c8;
margin:auto;
width: 20rem;
height: auto;
 display:flex;
 flex-direction:column;
  justify-content:center;
  align-items:center;
  transform: Skew(8deg);
  padding:10px;
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
&:hover {
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
 }
`
const Image = styled.img`
  width: 95%;
  height:90%;
  aspect-ratio:3/2;
  object-fit:cover;
  border: 1px solid #ccc;
  border-radius: 5px;
transition :all 5s ease-out;

  &:hover{opacity:0.5}
`;
const Home = () => {

  return (
    <Container>
      < LeftSection>
        <H1><MdCameraOutdoor size={40} color="#0d806d"/>AdventureSnapshots</H1>
        <SubHeading>Adventure , Capture and Save your memories </SubHeading>
        <ButtonContainer>
          <Button to="signUp">Sign Up </Button>
          <Button to="login"> Log In</Button>
        </ButtonContainer>
      </ LeftSection>
      <RightSide>
        <ImageWrapper>

          <Image src="/Images/image1.jpeg" />
        </ImageWrapper>
        <ImageWrapper2>
          <Image src="/Images/image2.jpeg" />
        </ImageWrapper2>

      </RightSide>
    </Container>
  )
}

export default Home