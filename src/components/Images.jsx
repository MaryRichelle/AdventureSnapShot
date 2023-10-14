import React, { useState, useEffect, useContext } from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import Loading from './Loading';
import { ModelSelected } from "../Context/ModalContext"
import {motion} from "framer-motion"


const ImageWrapper = styled(motion.div)`
background: #cbc8c8;
border:1px solid #cbc8c8;
margin:auto;
width:min(20rem,18rem);
border-radius: 5px;
height: auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:10px;
opacity:0.8;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
&:hover {
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
 }
`
const Image = styled(motion.img)`
  width: 95%;
  height:90%;
  aspect-ratio:3/2;
  object-fit:cover;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition :all 5s ease-out;
 
`;

const Images = ({ photo }) => {
  const { setSelected } = useContext(ModelSelected)
  const [loading, setLoading] = useState(true)
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: photo.id })

  const URL = `https://source.unsplash.com/${photo.id}`;

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <ImageWrapper ref={setNodeRef} style={style}  {...attributes} {...listeners} 
    
    whileHover={{opacity:1}}
    >
      {
        loading ? (
          <Loading />
        ) : (
          <Image initial={{opacity:0}}
          animate= {{opacity:1}}
          transition={{delay:1}}
          onDoubleClick={() => setSelected(URL)} src={URL} alt={"nature"} loading="lazy" />
        )}
    </ImageWrapper>
  )
}

export default Images