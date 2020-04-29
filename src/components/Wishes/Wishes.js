import React from 'react'
import { Component } from 'react'
import fondmarin from './images/fondmarin.jpg'
import foret from './images/foret.jpg'
import montagne from './images/montagne.jpg'
import plage from './images/plage.jpg'
import ville from './images/ville.jpg'
import './Wishes.css'



class Wishes extends Component {
    constructor(props){
        super(props)
        this.state = {
          fondmarin : false,
          foret : false,
          montagne : false,
          plage : false,
          ville : false,
        }
      }

  
      render (){ 
        return (
            <div className="Wishes">
                <h1>Pendant cette période de confinement, il est difficile de s'évader.</h1> 
                <h1>Où voulez-vous vous échapper ?</h1>

                <div className="container">
                 
                    <div className="ligne1">
                        <div className="p1">
                             <h2>Plages</h2>
                             <img className="photos1" src={plage} alt="Plages"/>
                        </div>

                        <div className="p2">                     
                            <h2>Forêts</h2>
                            <img className="photos1" src={foret} alt="Forêts"/>
                        </div>

                        <div className="p3"> 
                            <h2>Montagnes</h2>
                            <img className="photos1" src={montagne} alt="Montagnes"/>
                        </div>
                    </div>

                    <div className="ligne2">
                        <div className="p4"> 
                            <h2>Fonds Marins</h2>
                            <img className="photos2" src={fondmarin} alt="Fonds Marins"/>
                        </div>
                        
                        <div className="p5"> 
                            <h2>Villes</h2>
                            <img className="photos2" src={ville} alt="Villes"/>
                        </div>
                    </div>
                             
                </div>
            </div>
        );
    }}
  

    export default Wishes;

   
 //   <Link to ={{pathname: '/select',
 //                  state: this.state.Forêt }}>
 //            <img className="photos" src={foret} alt="Forêt"/>
 //   </Link> 