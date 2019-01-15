import React from 'react';
import axios from 'axios';
export default class Hotels extends React.Component{
    state = {
        hotels: []
    }
    
    componentDidMount(){
        axios.get(`https://around-the-world-ancabute.c9users.io/hotels`).then(res =>{
            console.log(res);
            this.setState({hotels:res.data});
        });
    }
    
    render(){
        return (
            <div className = "hotels-show"> Hotels:
                <ul>
                    {this.state.hotels.map(hotel=>(
                        <li key ={hotel.id}>{hotel.name}: 
                            <div>Description:  
                                    {hotel.description}
                            </div>
                            <div>Address:
                                { hotel.address}
                            </div>
                            <div>Number of stars:
                                { hotel.stars}
                            </div>
                        </li>))}
                </ul>
            </div>
        );
    }
}