import React from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../../api';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import {useHistory} from 'react-router';

type Inputs = {
    name: string;
    model: string;
    price: number
}

export const CreateCar = () => {

    const history = useHistory();
    const { register, handleSubmit} = useForm<Inputs>();

    const onSubmit = async (data:any) => {
        console.log(data);
        console.log('Submit form to create a car');
        await server_calls.create(data)
        history.push('/cars')
    }

    return (
        <Container>
            <h1>Create Your New Car</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label id="subheader" htmlFor="name">Car Name</label>
                <input type="text" maxLength={100} name="name" id="name" placeholder="Add Car Name" ref={register } />
                <label id="subheader" htmlFor="model">Car Model</label>
                <input type="text" name="model" id="model" placeholder="Add Car Model" ref={register } />
                <label id="subheader" htmlFor="price">Car Price</label>
                <input type="text" name="price" id="price" placeholder="Add Car Price" ref={register } />
                <button type="submit" className="button-styles">Submit Car</button>
            </form>
        </Container>
    )
}