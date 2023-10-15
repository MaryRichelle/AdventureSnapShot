import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { PhotoContext } from "../Context/PhotosContext"


const SearchContainer = styled.div`
display:flex;
border:.5px solid gray;
border-radius: 10px; padding:5px;

`
const Input = styled.input`
border: none;
outline:none;
font-family:initial;
font-size: 15px;
background:inherit;
color:inherit;
`
const SearchIcon = styled(AiOutlineSearch)`
cursor:pointer;
&:hover{
  opacity: 0.5;
 color: #0a812c
}
`
const Search = () => {
  const { setSearchResult } = useContext(PhotoContext)
  const [query, setQuery] = useState("")

  function handleChange(e) {
    if (e.target.value) {
      setQuery(e.target.value)
    }
  }
  const handleSearch = () => {
    setSearchResult(query.toLowerCase().trim())
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <SearchContainer onKeyPress={handleKeyPress}>
      <Input type='text' placeholder="Try Nature, Tree" onChange={handleChange
      } />
      <SearchIcon onClick={handleSearch} />
    </SearchContainer>
  )
}

export default Search