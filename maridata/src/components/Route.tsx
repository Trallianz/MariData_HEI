import React from 'react'
import PropTypes from 'prop-types'

interface routenProps{
    time: number;
}

const Route = (props:routenProps) => {
  return (
    <div>{props.time}</div>
  )
}

Route.propTypes = {}

export default Route