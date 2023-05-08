import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Form,Input} from 'reactstrap'

function OptionComp({setselectedUserId}) {

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

    const getUser= (e) => {
      setselectedUserId(e.target.value);
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
      <option >Filter blogs for users</option>
      {
        user && user.map((item) =>(
          <option key={item.id} value={item.id}>
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