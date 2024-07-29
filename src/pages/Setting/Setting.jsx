import React from "react"

import { Nav } from "../../components/Setting/Nav/Nav"
import {Profile} from "../../components/Setting/Profile/Profile"
import {Border} from "../../components/Setting/Border"
import { Subscribe } from "../../components/Setting/Subscirbe/Subscribe"
import Collection from "../../components/Setting/Collection/Collection"

const Setting = () =>{
  return(
    <>
      <Nav />
      
      <Profile />

      <Border />
        <Subscribe />
      <Border />
        <Collection />

      <Border />

    </>
  )
}

export default Setting