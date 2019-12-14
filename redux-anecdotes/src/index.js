import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { createAnecdote } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  search: filterReducer
})

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
store.dispatch(createAnecdote('combineReducers forms one reducer from many simple reducers'))

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('root')
  )
}

render()
store.subscribe(render)