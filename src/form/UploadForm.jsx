import React, { useState } from 'react'
import ProgressBar from "../components/ProgressBar"
import styled from 'styled-components'

const Container = styled.section`
width: 60%;
margin : auto;
`
const Status = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:start;
gap:2rem;
`

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const types = ["image/png", "image/jpeg"]


  const changeHandler = (e) => {
    let selected = e.target.files[0]
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError("")
    } else {
      setFile(null)
      setError("only Jpeg and png file types are supported")
    }
    console.log(selected);
  }

  return (
    <Container>
      <form>
        <input type="file" name="myFile" onChange={changeHandler} />
      </form>
      <Status>
        {error && <div>{error} </div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </Status>
    </Container>
  )
}

export default UploadForm