import React, { useEffect } from 'react'
import useStorage from '../Hooks/useStorage'
import styled from 'styled-components'


const ProgressEl = styled.div`
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
    <ProgressEl style={{width: progress + "%"}}></ProgressEl>
  )
}

export default ProgressBar