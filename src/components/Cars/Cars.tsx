import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import {Jumbotron, Button, Container, Card, Col, Row } from 'react-bootstrap';
import car from '../../assets/img/ferrari.jpg';

import { useHistory } from 'react-router-dom';
import { server_calls } from '../../api';

export const Cars = () => {
    const history:any = useHistory();



    const routeChange = (id?:string, path?:string) => {
        history.push({
            pathname: path,
            state: { car_id: id}
        })
    }

    let {carData, getData} = useGetData();
    console.log(carData)

    const handleDeleteCar = (id:any) => {
        server_calls.delete(id);
        getData()
    }
    
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Hello Cars</h1>
                        <p>Here are your current collection of cars!</p>
                        <Button onClick = { () => routeChange('','create') }>Create New Car</Button>
                    </Jumbotron>
                </Col>
            </Row>

            { /* row to display data */}
            <Row>
                <Col>
                    <div>
                        {carData.map( (item:any) => ( 
                            <div key={item.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={car} />
                                    <Card.Body>
                                        <Card.Title>
                                          { item.name}
                                      </Card.Title>
                                      <Card.Text>
                                          {item.model}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.price}
                                        </Card.Text>   

                                <Button variant="danger" onClick = { () => handleDeleteCar(item.id)}>Delete</Button>
                                <Button variant="primary" onClick = { () => routeChange(item.id, 'update')}>Update</Button>
                            </Card.Body>  
                            </Card>
                          </div>      
                        ))}
                    </div>              
                </Col>
            </Row>
        </Container>
    )
}