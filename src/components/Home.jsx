import React from 'react'
import { MdCameraOutdoor } from "react-icons/md"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ThemeToggler from "./ThemeToggler"
import { devices } from "../Css/Breakpoints"

const Container = styled.main`
padding:4rem;
 max-width: 100vw;
 height: 100vh;
 display: flex;
 justify-content:space-around;
 align-items:flex-start;
 `

const LeftSection = styled.section`
 display: flex;
 justify-content: space-around;
 align-items:center;
 flex-direction: column;
 gap:6rem;
 `
const H1 = styled.h1`
 font-size:1em;
 @media only screen and ${devices.md}{
font-size:2em;
}
 
 `
const SubHeading = styled.p`
 font-size:1.2rem;
 transform: SkewY(-5deg);
  @media only screen and ${devices.md}{
font-size:2rem;
}
 `
const RightSide = styled.section`

 `
const ButtonContainer = styled.div`
display: flex;
 display:flex;
 gap:1.2rem;
 justify-content: space-around;
 align-items: center;

`
const Button = styled(Link)`
 background:#0d806d;
color:#faf7f7;
 text-decoration: none;
padding: .3rem;
border: 1px solid #0d806d;
border-radius: 10px;
 @media only screen and ${devices.md}{
  padding: .5rem;

}
 `
const ImageWrapper = styled.div`
  border:1px solid #cbc8c8;
  border-radius:15px;
  background:white;
  margin:auto;
  width: 15rem;
  height: auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:10px;
  transform: SkewY(12deg);
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  &:hover {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
 }
`


const ImageWrapper2 = styled.div`
  border:1px solid #cbc8c8;
  margin:auto;
  width: 15rem;
  height: auto;
  background:inherit;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transform: Skew(12deg);
  padding:10px;
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  &:hover {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
 }
`
const ImageWrapper3 = styled.div`
  border:1px solid #cbc8c8;
  border-radius:15px;
  background:white;
  margin:auto;
  width: 15rem;
  height: auto;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transform: SkewY(10deg);
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
        <H1><MdCameraOutdoor size={40} color="#0d806d" />AdventureSnapshots</H1>
        <SubHeading>Adventure , Capture and Save your memories </SubHeading>
        <ButtonContainer>
          <Button to="signup">Sign Up </Button>
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
        <ImageWrapper3>
          <Image src="/Images/image3.jpeg" />
        </ImageWrapper3>
      </RightSide>
      <ThemeToggler />
    </Container>
  )
}

export default Home