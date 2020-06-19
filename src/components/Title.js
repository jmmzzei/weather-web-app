import React from 'react'

export default ({ title }) =>
  typeof title == 'string' ? (
    <h1 className="title">{title}</h1>
  ) : (
    <h1 className="title">{title.name}</h1>
  )
