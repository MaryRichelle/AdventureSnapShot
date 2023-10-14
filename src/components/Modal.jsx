import React, { useContext } from 'react'
import { ModelSelected } from "../Context/ModalContext"
import styled from 'styled-components'


const ModalContainer = styled.section`
position: fixed;
top: 0;
left:0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.5)

`
const ModalImage = styled.img`
display: block;
max-width: 80%;
height:80%;
margin:6rem auto;
box-shadow: 3px 5px 7px #000;
border:3px solid white;
border-radius:4px;
`


const Modal = () => {
  const { selected, setSelected } = useContext(ModelSelected)
  const handleCloseModal = (e) => {
    if (selected && e.target.tagName === "IMG") {
      return
    }
    setSelected(null);
  }
  return (
    <ModalContainer onClick={handleCloseModal} >
      <ModalImage src={selected} alt="" />
    </ModalContainer>
  )
}

export default Modal