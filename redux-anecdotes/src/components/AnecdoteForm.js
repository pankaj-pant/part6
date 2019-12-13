import React from 'react'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({store}) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        store.dispatch(
          createAnecdote(content)
        )
        store.dispatch(showNotification(`you created '${content}'`))
        setTimeout(() => {
            store.dispatch(hideNotification())
          }, 5000)
      }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>
    )
}

export default AnecdoteForm