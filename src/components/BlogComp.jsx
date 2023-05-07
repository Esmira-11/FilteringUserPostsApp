import React, { useEffect, useState } from 'react'
import { Table} from 'reactstrap'
import axios from 'axios';
//props
function BlogComp(props) {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
          setData(res.data);
          // <Common blog = {data}/>
        })
        .catch (err => {
            console.log("Data gelmedi!!!")
        })
    }, [])

  return (
    <>
    <Table bordered>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>

    {
        data && data.map(item => {
            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
            </tr>
        })
    }

  </tbody>
</Table>
    </>
  )
}

export default BlogComp