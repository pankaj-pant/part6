import React from 'react'

const Notification = ({ store }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const { notification } = store.getState()
  const visibility = { display: notification.visibility ? '' : 'none' }

  return (
    <div style={visibility}>
      <div style={style}>
        {notification.content}
      </div>
    </div>
  )
}

export default Notification