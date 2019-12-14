import React from 'react'
import { connect } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import SearchFilter from './SearchFilter'

const AnecdoteList = (props) => {
    /* const { anecdotes, search } = store.getState()
    console.log(anecdotes, search) */

    props.anecdotes.sort(function(a,b)
          {return (a.votes-b.votes)*-1}
        )

    const handleClick = (id, content) => {
        props.voteForAnecdote(id)
        props.showNotification(`you voted '${content}'`)
        setTimeout(() => {
            props.hideNotification()
          }, 5000)
    }

    const anecdotesToShow = () => {
        if (props.search === '') {
            return props.anecdotes
          } else {
              return props.anecdotes.filter(a => a.content.toString().toLowerCase().includes(props.search.toString().toLowerCase()) === true)
          }
 
    }

    return (
        <div>
            <SearchFilter />
            {anecdotesToShow().map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => handleClick(anecdote.id, anecdote.content)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

//export default AnecdoteList

const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes,
      search: state.search
    }
  }

const mapDispatchToProps = {
    voteForAnecdote,
    showNotification,
    hideNotification
}
  

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes