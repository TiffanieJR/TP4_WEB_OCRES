//import { render } from '@testing-library/react';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';


const profils = [
  {
    prenom: 'Nivine',
    nom: 'Diallo',
    birth_date: '20 Avril 1999',
    image_profil:'nivine.JPG',
    last_publication: "Mon signe astrologique est celui du Bélier et toi ?",
  },

  {
    prenom: 'Tiffanie',
    nom: 'Jégo-Ragas',
    birth_date: '15 Juin 1999',
    image_profil:'tiffanie.JPG',
    last_publication: "Je suis née le 15 Juin 1999, donc je suis Gémeaux !",
  },

  {
    prenom: 'Mathilde',
    nom: 'Buono',
    birth_date: '17 Novembre 1999',
    image_profil:'mathilde.JPG',
    last_publication: "Meilleur signe pour la fin ! Je suis Scorpion !",
  }
];

//SOURCE : slide 17, cours M KOURGANOFF
class Profil extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      color: 'basic',
    }
  }

  //SOURCE : https://stackoverflow.com/questions/55788368/how-to-change-the-selected-table-row-background-color-with-react
  couleurUpdate = () => {
    if(this.state.color=="basic"){
      this.setState({color: "golden"});
    }
    
    else
    {
      this.setState({color: "basic"})
    }
  }
  

  //SOURCE : https://fr.reactjs.org/docs/components-and-props.html
  render() {
    
    return (
      
      <div>
        <div class="container mt-4">

          <div className="Couleur">
            <div className={this.state.color}>
              <img src={profils[this.props.profil_actualise].image_profil}></img>
              
              <center>
                <div className = "Principal">
                  <div class="row">
                    
                    <div class = "col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                      <h6>{profils[this.props.profil_actualise].prenom}</h6>
                    </div>

                    <div class = "col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                      <h6>{profils[this.props.profil_actualise].nom}</h6>
                    </div> 
                    
                  </div> 
                </div>
              </center>
                
                <div>
                  <h6>{profils[this.props.profil_actualise].birth_date}</h6>
                </div>
                
                <div class = "col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                  <button onClick={this.couleurUpdate}>
                      Change Style
                  </button>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}


class Publication extends React.Component
{
  constructor(props) {
    super(props); 
    this.state = {
      profil_count: 0
    }
  }

  compteurUpdate = () => {
    profils[this.props.profil_actualise].profil_count = profils[this.props.profil_actualise].profil_count +1
    this.setState({profil_count: profils[this.props.profil_actualise].profil_count})
  }

  render() {

    const list = []

    for (let i = 0; i < profils[this.props.profil_actualise].profil_count; i++) {
      list.push(<p>C'est super</p>)
    }
    
    return (
      
      <div>
        <div class="container mt-4">
          
          <div className="super">
            <p>{profils[this.props.profil_actualise].last_publication}</p>
            <div>
              <button onClick={this.compteurUpdate}>
                C'est super !
              </button>
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}

/*SOURCE UTILISATION DE LA VARIABLE LET
https://medium.com/@vincent.bocquet/var-let-const-en-js-quelles-diff%C3%A9rences-b0f14caa2049#
*/
let compteur = 0;

class Button extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      compteur: 0
    }
  }

  profilUpdate1 = () => {
    compteur=0;
    this.setState({compteur: 0});
  }

  profilUpdate2 = () => {
    compteur=1;
    this.setState({compteur: 1});
  }

  profilUpdate3 = () => {
    compteur=2;
    this.setState({compteur: 2});
  }
  

  render() {
    
    return (
      
      <div>
        <center>

        <br></br>
        <br></br>

        <div className="Principal">
          <div className="row">
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
              <button onClick={this.profilUpdate1}>
                Nivine Diallo
              </button>            
            </div>

            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <button onClick={this.profilUpdate2}>
                Tiffanie Jégo-Ragas
              </button>
            </div>

            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
              <button onClick={this.profilUpdate3}>
                Mathilde Buono
              </button>
            </div>

          </div>
        </div>
        
        <Profil profil_actualise={compteur} />
        </center>

        <Publication profil_actualise={compteur} />        
        
      </div>

    );
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);


/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();