import React from 'react'

export default function Header(props) {
  return (
    <nav className='header'>{props.sharedData.header}</nav>
  )
}
