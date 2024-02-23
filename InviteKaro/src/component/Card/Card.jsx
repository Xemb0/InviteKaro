import React from 'react'
import "./Card.css"
const img ="https://images.unsplash.com/photo-1587271315307-eaebc181c749?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function 
() {
  return (
    <div className="card">
    <img className="card-image" src={img} alt={"wed"} />
    <div className="card-content">
      <h2 className="card-title">Wedding</h2>
    
    </div>
  </div>
  )
}
