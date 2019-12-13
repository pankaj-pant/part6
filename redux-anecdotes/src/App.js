import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import SearchFilter from './components/SearchFilter'

const App = ({store}) => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <SearchFilter store={store}/>
      <Notification store={store}/> 
      <AnecdoteForm store={store}/>
      <AnecdoteList store={store}/>
    </div>
  )
}

export default App