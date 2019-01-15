import React, { Component } from 'react';
import axios from 'axios';

class RequestForm extends Component{
    
    constructor(){
        super();
        this.state= {
            name: "", 
            lastName: "", 
            email:"",
            hotel:"", 
            flight:"", 
            period:""
        }
    }
    
    dataChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    
    postData(ev){
        ev.preventDefault()
        
        const name = this.state.name 
        const lastName = this.state.lastName
        const email = this.state.email
        const hotel = this.state.hotel
        const flight = this.state.flight
        const period = this.state.period
        
        
        const data = {
            name, 
            lastName, 
            email, 
            hotel, 
            flight, 
            period
        }
        
        axios.post(`https://around-the-world-ancabute.c9users.io/requests`, data)
        .then(response=>{
            console.log(response);
        })
    }
    
    render(){
        return(
            <div> 
                <form  className="requestform" onSubmit={this.postData.bind(this)}>
                    <label>
                    Name:
                    <input className="input1" type="text" name="name" value = {this.state.name} onChange={this.dataChange.bind(this)}/>
                    </label>
                    
                    <label>
                    Last Name:
                    <input className="input2" type="text" name="lastName" value = {this.state.lastName} onChange={this.dataChange.bind(this)}/>
                    </label>
                    
                    <label>
                    E-mail:
                    <input className="input3" type="text" name="email" value = {this.state.email} onChange={this.dataChange.bind(this)}/>
                    </label>
                    
                    <label>
                    Hotel:
                    <input className="input4" type="text" name="hotel" value = {this.state.hotel} onChange={this.dataChange.bind(this)}/>
                    </label>
                    
                    <label>
                    Flight:
                    <input className="input5" type="text" name="flight" value = {this.state.flight} onChange={this.dataChange.bind(this)}/>
                    </label>
                    
                    <label>
                    Period of time:
                    <input className="input6"  type="text" name="period" value = {this.state.period} onChange={this.dataChange.bind(this)}/>
                    </label>
                    
                    <input className="submitbutton" type="submit"/>
                </form>
            
            </div>
            );
    }
}
export default RequestForm;