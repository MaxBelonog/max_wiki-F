import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Articles extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <inputType>
            {this.props.indexPage((article, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='Articles list'>
                        {article.name}
                      </span>

                    </h4>
                  }>
                  <span className='about'>
                    {article.about}
                  </span>
                </inputType>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
export default 'App'
