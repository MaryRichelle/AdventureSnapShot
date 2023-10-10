import React, { useContext } from 'react'
import styled from "styled-components";
import { ThemesContext } from "../Context/ThemeContext"
import { CiSun } from 'react-icons/ci'
import { BsMoonStars } from "react-icons/bs"


const SwitchContainer = styled.label`
position:relative;
display:inline-block;
cursor:pointer;
min-width:60px;
height:30px;
background-color:#0d806d;
border-radius: 30px;
transition:.3s ease all;
`
const SwitchInput = styled.input`
display: none;
`
const SwitchIcon = styled.div`
  position: absolute;
  transform: ${(props) => (props.theme === 'light' ? 'translateX(100%)' : 'translateX(80%)')};
  transition: 0.3s ease all;
`;


const ThemeToggler = () => {
  const [{ isDark }, toggleThemes] = useContext(ThemesContext)
  return (
    <SwitchContainer >
      <SwitchInput />
      <SwitchIcon onClick={toggleThemes}>
        {isDark ? <BsMoonStars size={20} color='black' /> : <CiSun size={30} color='yellow' />}

      </SwitchIcon>
    </SwitchContainer>
  )
}

export default ThemeToggler