import React from 'react'
import { Card } from 'react-bootstrap'

const cards = () => {
  return (
    <div className='card'>
          <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1649011622651-69c2f3dab1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
    <Card.Body>
      <Card.Text>
        <h1>welcome to honolulu hawaii</h1>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
       <h1 >welcome to miami</h1>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1648819955157-a9a96e307d56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
  </Card>
    </div>
  )
}

export default cards