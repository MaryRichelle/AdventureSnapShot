import React from 'react'
import styled from 'styled-components'
import { ImSpinner9 } from "react-icons/im"




const Spinner = styled(ImSpinner9)`
color : #0d806d;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Loading = () => { 
  return (
    <Spinner/>
  )
}

export default Loading