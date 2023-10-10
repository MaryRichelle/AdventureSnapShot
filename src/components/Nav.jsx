import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import { Link } from 'react-router-dom'
import { MdCameraOutdoor } from "react-icons/md"
import ThemeToggler from './ThemeToggler'
const Navbar = styled.nav`
width:100vw;
padding-block:15px;
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
const Nav = () => {
  return (
    <Navbar>
      <Links to="/gallery"><MdCameraOutdoor />AdventureSnapshots</Links>
      <Search />
      <div>
        <ThemeToggler />
        <Links to="/">Logout</Links>
      </div>
    </Navbar>
  )
}

export default Nav