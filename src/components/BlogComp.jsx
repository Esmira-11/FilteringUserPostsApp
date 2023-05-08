import React, { useEffect, useState } from 'react'
import { Table} from 'reactstrap'
import axios from 'axios';

function BlogComp({selectedUserId}) {

    const [data, setData] = useState([])
    let filteredBlog = data.filter((item) => selectedUserId == item.userId)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
          setData(res.data);

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
      data && filteredBlog.length == 0 ? data.map((item)=>(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td scope="row">{item.title}</td>
          <td>{item.body}</td>
        </tr>
      ))
      : filteredBlog.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td scope="row">{item.title}</td>
          <td>{item.body}</td>
        </tr>
      ))
    }
  </tbody>
</Table>
    </>
  )
}

export default BlogComp