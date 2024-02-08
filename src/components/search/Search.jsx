import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setKeyword(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        const url = keyword ? `/products?keyword=${keyword}` : "/products"
        navigate(url)
    }
  return (
    <div className="search__section">
        <form onSubmit={submitHandler}>
            <input type="text" value={keyword} onChange={handleOnChange}/>
            <button>search</button>
        </form>
    </div>
  )
}

export default Search
