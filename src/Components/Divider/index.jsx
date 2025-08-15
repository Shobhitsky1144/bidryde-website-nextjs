import React from 'react'
import './Divider.scss'

const Divider = ({data}) => {
  return (
    <div className={`${data ?? ""}divider`}>
      <div className={`${data ?? ""}circle`}></div>
      <div className={`${data ?? ""}line`}></div>
      <div className={`${data ?? ""}circle`}></div>
    </div>
  )
}

export default Divider