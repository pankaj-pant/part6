import React from 'react'

import { voteForAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState()

    anecdotes.sort(function(a,b)
          {return (a.votes-b.votes)*-1}
        )

    return (
        <ul>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => store.dispatch(voteForAnecdote(anecdote.id))}>vote</button>
                </div>
                </div>
            )}
        </ul>
    )
}

export default AnecdoteList