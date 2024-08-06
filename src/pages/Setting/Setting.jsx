import React from "react"

import { Nav } from "../../components/Setting/Nav/Nav"
import {Profile} from "../../components/Setting/Profile/Profile"
import {Border} from "../../components/Common/Border"
import { Subscribe } from "../../components/Setting/Subscirbe/Subscribe"
import Collection from "../../components/Setting/Collection/Collection"
import Board from "../../components/Setting/Board/Board"

const Setting = () =>{
  return(
    <>
      <Nav my={true} />
      
      <Profile />

      <Border />
      
      <Subscribe />
      <Border />
      <Collection />

      <Border />
        <Board />
    </>
  )
}

export default Setting