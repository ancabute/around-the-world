import React from 'react';
import axios from 'axios';
export default class Cities extends React.Component{
    state = {
        cities: []
    }
    
    componentDidMount(){
        axios.get(`https://around-the-world-ancabute.c9users.io/cities`).then(res =>{
            console.log(res);
            this.setState({cities:res.data});
        });
    }
    
    render(){
        return (
            <div className = "cities-show"> Cities:
                <ul>
                    {this.state.cities.map(city=>(
                        <li key ={city.id}>{city.name}, {city.country}</li>))}
                </ul>
            </div>
        );
    }
}