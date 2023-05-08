import React, {useState } from 'react'
import OptionComp from './OptionComp'
import BlogComp from './BlogComp'

function Common() {

  const [selectedUserId, setselectedUserId] = useState();
  return (
    <>
      <OptionComp  setselectedUserId = {setselectedUserId}/>
      <BlogComp selectedUserId = {selectedUserId}/>
    </>
  )
}

export default Common