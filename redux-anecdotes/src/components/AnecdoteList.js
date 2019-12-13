import React from 'react'

import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState().anecdotes

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

    return (
        <ul>
            {anecdotes.map(anecdote =>
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