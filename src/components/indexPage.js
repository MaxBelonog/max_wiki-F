import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class IndexPage extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.indexPage.map((article, index) =>{
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
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default IndexPage
