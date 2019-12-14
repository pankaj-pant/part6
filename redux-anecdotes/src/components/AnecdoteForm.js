import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        
        props.createAnecdote(content)
        
        props.showNotification(`you created '${content}'`)
        setTimeout(() => {
            props.hideNotification()
          }, 5000)
      }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>
    )
}

export default connect(null, { createAnecdote, showNotification, hideNotification })(AnecdoteForm)