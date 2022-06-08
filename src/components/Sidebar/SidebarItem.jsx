import React from 'react'
import './sidebarItem.css'

function SidebarItem({Icon, text}){
  return(
    <div className="sidebar__item">
      <Icon className="icon"/>
      <p>{text}</p>
    </div>
)}


export default SidebarItem