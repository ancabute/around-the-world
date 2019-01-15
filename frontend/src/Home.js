import React, { Component } from 'react';
import img from './media/img.jpg';



class Home extends Component{
    
    render(){
        return(
         <div>
            <div className="homedescription" >Daca esti unul dintre acei care se intreaba “De unde începe lumea şi unde se termină ea?“, aici este locul potrivit pentru a gasi raspunsul!
                <p>Daca  doresti sa te eliberezi de automatismele cotidiene şi şă descopere noi realităţi, noi te putem ajuta!</p>
                <p> “Around the World” pune la dispoziţie toate informţiile de care este nevoie pentru planificarea unei vacante de neuitat. Produsul nostru este în esență o aplicație web care pune la dispoziție o alegere variată a unor posibile călătorii memorabile și se adresează în primul rând persoanelor fizice, care printre pasiunile lor se regăsesc călătoria și descoperirea locurilor noi și pline de istorie. Totodată, se adresează persoanelor care printr-un simplu click vor să-și planifice vacanța, având la dispoziție toate informațiile necesare despre locul în care vor călători. Astfel, cu un cont în care vor fi salvate toate rezervările, această aplicaţie poate deveni rapid “paşaportul oricărui călător”.</p>
                
            </div>
     <div className="div100">
     
        <div className="row">
        <div className="img">
          <img src={img} alt='img' width="200%" height="200%" />
        
        </div>
        </div>
        
 
        
        
        
        
        
      </div>
      </div>
       
        
    );
    }
}
export default Home;