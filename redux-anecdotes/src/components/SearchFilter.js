import React from 'react'
import { search } from '../reducers/filterReducer'

const SearchFilter = ({ store }) => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault()
    const content = event.target.value
    store.dispatch(search(content))

  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default SearchFilter