import React from 'react'
import './App.css'
import ProfilePhoto from './profile/ProfilePhoto'
import FullName from './profile/FullName'
import Address from './profile/Address'

 function Main() {
    return (
        <div className="change">
         <ProfilePhoto></ProfilePhoto> 
         <FullName></FullName>  
         <Address></Address>
        </div>
    )
}
export default Main ;