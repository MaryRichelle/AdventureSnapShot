import React, { useEffect } from 'react'
import useStorage from '../Hooks/useStorage'
import styled from 'styled-components'
import { motion } from "framer-motion"


const ProgressEl = styled(motion.div)`
height:5px;
background: tomato;
transition:3s;
`

const ProgressBar = ({file,setFile}) => {

  const {url,progress} = useStorage(file)
  console.log(progress,url);
  useEffect(() => {
    if (url){
      setFile(null)
    }

  },[url])
  return (
    <ProgressEl 
    initial={{width:2}} 
    animate={{width: progress + "%"}}></ProgressEl>
  )
}

export default ProgressBar