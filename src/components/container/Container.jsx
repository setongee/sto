import React from 'react'
import './container.scss'
import '../../styles/styles.scss'

export default function Container(props) {
  return (
    <div className={`container ${props.customClass}`}>
        {props.children}
    </div>
  )
}
