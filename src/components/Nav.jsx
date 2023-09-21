import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import { Link } from 'react-router-dom'
import { MdCameraOutdoor } from "react-icons/md"
const Navbar = styled.nav`
width:100vw;
padding-block:15px;
display:flex;
justify-content: space-around;
align-items:center;
position:sticky;
top:0;
z-index:2;
background: #ffffff;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
const Logo = styled(Link)`
text-decoration: none;
color: #2d2d2d;`
const Nav = () => {
  return (
    <Navbar>
      <Logo to="/"><MdCameraOutdoor />AdventureSnapshots</Logo>
      <Search />
    </Navbar>
  )
}

export default Nav