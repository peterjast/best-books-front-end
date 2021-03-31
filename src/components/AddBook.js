import React from 'react';
import Button from 'react-bootstrap/Button';

class AddBook extends React.Component {
  render(){
    return(
      <Button onClick={this.props.show}>Add A Book</Button>
    )
  }
}

export default AddBook;