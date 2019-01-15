import React from 'react';
import axios from 'axios';

export default class Attractions extends React.Component{
    state = {
        attractions: []
    }
    
    componentDidMount(){
        axios.get(`https://around-the-world-ancabute.c9users.io/attractions`).then(res =>{
            console.log(res);
            this.setState({attractions:res.data});
        });
    }
    
    render(){
        return (
            <div className = "attractions-show"> Attractions:
                <ul>
                    {this.state.attractions.map(attraction=>(
                        <li key ={attraction.id}>{attraction.name}:
                            <div>
                                {attraction.description}
                            </div>
                        </li>))}
                </ul>
            </div>
        );
    }
}