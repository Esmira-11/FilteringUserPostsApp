import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Form,Input} from 'reactstrap'
function OptionComp() {

    const [user, setUser] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
          setUser(res.user)
        })
        .catch (err => {
            console.log("Data gelmedi!!!")
        })
    }, [])


  return (
    <>
    <Form>
        
  <Input
    bsSize="lg"
    className="mb-3"
    type="select"
  >
    {
        user && user.map((item,index) =>{
            <option key={index}>
            {item.name}
            </option>
        })
}
  </Input>  
</Form>
    </>
  )
}

export default OptionComp