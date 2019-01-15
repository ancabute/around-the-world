import React, { Component } from 'react';
import Cities from './Cities';
import Attractions from './Attractions';
import Hotels from './Hotels'
import Flights from './Flights';
import RequestForm from './RequestForm';


class Choose extends Component{
    
    constructor(){
        super();
        this.state = { showRequestForm: false }
    }
    
     _showRequestForm = (bool) => {
    this.setState({
      showRequestForm : bool
    });
  }
    
    render(){
        return(
            <div className="destination">
            <div >
                These are our available offers:
            </div>
            <p></p>
                <div>
                    <Cities/>
                </div>
                <div>
                    <Attractions/>
                </div>
                 <div>
                    <Hotels/>
                </div>
                <div>
                    <Flights/>
                </div>
                <div>
                You can request a package if you submit your information <button className="here" onClick ={this._showRequestForm.bind(null, true)}> here </button>{ this.state.showRequestForm && (<RequestForm/>) }
            </div>
            </div>
            );
    }
}
export default Choose;