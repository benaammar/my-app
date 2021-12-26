import 'bootstrap/dist/css/bootstrap.min.css';

import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import ListUtilisateur from "./components/utilisateur/ListUtilisateur"
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import{BrowserRouter as Router,Route,Switch}from "react-router-dom"
import AjoutUtilisateurComponent from './components/utilisateur/AjoutUtilisateurComponent';
import Acceuil from './components/Acceuil';
import MedecinRechercheComponent from './components/medecinInfo/MedecinRechercheComponent';
import Connexion from './components/Connexion';
import RdvDisponible from './components/rdvDisponible/RdvDisponible'

function App() {
  return (
    <div>
      <Router>
          
            <HeaderComponent/>
            <div class="container">
              <Switch> 
                <Route path="/" exact component={Acceuil}></Route>
                <Route path="/utilisateurs" component={ListUtilisateur}></Route>
                <Route path="/medecin-recherche"component={MedecinRechercheComponent}></Route>
                <Route path="/ajout-utilisateur" component={AjoutUtilisateurComponent}></Route>
                <Route path="/connecter" component={Connexion}/>
                <Route path="/Rdv-dispo" component={RdvDisponible}/>
                
                
              </Switch>
            </div>
            
          
      </Router>
      <FooterComponent/>
    </div>
    
  );
}

export default App;
