import React from 'react';
import Button from 'react-bootstrap/Button';

class Delete extends React.Component {
  render(){
    return(
      <Button onClick={() => this.props.deleteBook(this.props.index)}>X</Button>
    )
  }
}

export default Delete;