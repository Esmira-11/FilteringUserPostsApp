import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Form,Input} from 'reactstrap'
import Common from './Common'
//props
function OptionComp() {

    
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
          setUser(res.data)
          console.log(user)
        })
        .catch (err => {
            console.log("Data gelmedi!!!")
        })
    }, [])

    // const getUser =()=>{
    //   <Common selectedUserId = {user.id}/>
    // }

    const getUser= (e) => {
      props(e.target.value);
    };


  return (
    
    <>
    <Form>   
  <Input
    bsSize="lg"
    className="mb-3"
    type="select"
    style={{background:'#b8bcbc'}}
    onChange={getUser}
  >
    {/* {props.getUser(user.id)} */}
    <option >Filter blogs for users</option>
      {
        user && user.map((item) =>(
          <option value={item.id}>
            {item.name}
          </option>
        ))
      }
    
  </Input>  
</Form>

    </>
  )
}

export default OptionComp