import React from 'react';
import axios from 'axios';
export default class Flights extends React.Component{
    state = {
        flights: []
    }
    
    componentDidMount(){
        axios.get(`https://around-the-world-ancabute.c9users.io/flights`).then(res =>{
            console.log(res);
            this.setState({flights:res.data});
        });
    }
    
    render(){
        return (
            <div className = "flights-show"> Flights:
                <ul>
                    {this.state.flights.map(flight=>(
                        <li key ={flight.id}>Zbor: {flight.airline}
                        </li>))}
                </ul>
            </div>
        );
    }
}