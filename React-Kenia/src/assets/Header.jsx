import React from 'react'


export default function Header(props) {
  return (
    <>
    <header>
        <h1 className='encabe'>HOLIWIS {props.fullname}</h1>
    </header>
    </>
  )
}