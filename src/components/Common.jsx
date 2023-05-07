import React, {useState } from 'react'
import OptionComp from './OptionComp'
import { Table} from 'reactstrap'
import BlogComp from './BlogComp'

//props
function Common() {
  //  const [blog, setBlog] = useState()
  // console.log(props.selectedUserId)
      //console.log(props.blog)
  //  setBlog = blog.filter((q => q.userId == selectedUserId))

  return (
    <>
      <OptionComp />
      <BlogComp/>
      {/* <Table bordered>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>
    {
        blog && blog.map((item) => {
            
            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
            </tr>
        })
    }

  </tbody>
</Table> */}
      
    </>
  )
}

export default Common