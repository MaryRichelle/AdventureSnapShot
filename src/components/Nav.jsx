import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import { Link, useNavigate } from 'react-router-dom'
import { MdCameraOutdoor } from "react-icons/md"
import ThemeToggler from './ThemeToggler'
import firebase from 'firebase/app';
import { getAuth, signOut } from "firebase/auth";

const Navbar = styled.nav`
max-height:5rem;
width:100vw;
padding-block:15px;
background:inherit;
display:flex;
justify-content: space-around;
align-items:center;
position:sticky;
top:0;
z-index:2;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
const Links = styled(Link)`
text-decoration: none;
color:inherit;
`
const RightSide = styled.div`
display:flex;
align-items:center;
gap:1rem;`

const Nav = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      alert(error)
    });
  }
  return (
    <Navbar>
      <Links to="/gallery"><MdCameraOutdoor color="#0d806d" />AdventureSnapshots</Links>
      <Links to='/your_gallery'>Your Gallery</Links>
      <Search />
      <RightSide>
        <ThemeToggler />
        <Links onClick={handleLogOut}>Logout</Links>
      </RightSide>
    </Navbar>
  )
}

export default Nav