import React from 'react';
// TODO: Add Bootstrap here

//Parameter inside our arrow function

export const Home = (props:any) => {
    return (
        <div>
            <h1>Hello World From React!</h1>
            <h4> { props.title } </h4>
        </div>
    )
}