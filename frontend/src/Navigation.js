import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component{
    
    render(){
        
        return(
            
            <div  className = "menu">
            
                <NavLink to ="/" className = "menu-list-item">Home</NavLink>
                <NavLink to ="/choose" className = "menu-list-item">Choose your location</NavLink>
                <NavLink to ="/contact" className = "menu-list-item">Contact</NavLink>
            
            
            </div>
            
            
            );
    }
}

export default Navigation;