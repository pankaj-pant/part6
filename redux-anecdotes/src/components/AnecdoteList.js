import React from 'react'

import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
    const { anecdotes, search } = store.getState()
    console.log(anecdotes, search)

    anecdotes.sort(function(a,b)
          {return (a.votes-b.votes)*-1}
        )

    const handleClick = (id, content) => {
        store.dispatch(voteForAnecdote(id))
        store.dispatch(showNotification(`you voted '${content}'`))
        setTimeout(() => {
            store.dispatch(hideNotification())
          }, 5000)
    }

    const anecdotesToShow = () => {
        if (search === '') {
            return anecdotes
          } else {
              return anecdotes.filter(a => a.content.toString().toLowerCase().includes(search.toString().toLowerCase()) === true)
          }
 
    }

    return (
        <ul>
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
        </ul>
    )
}

export default AnecdoteList