import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListUtilisateur from "./components/utilisateur/ListUtilisateur"
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import{BrowserRouter as Router,Route,Switch}from "react-router-dom"
import AjoutUtilisateurComponent from './components/utilisateur/AjoutUtilisateurComponent';
import Acceuil from './components/Acceuil';
import MedecinRechercheComponent from './components/medecinInfo/MedecinRechercheComponent';

function App() {
  return (
    <div>
      <Router>
          
            <HeaderComponent/>
            <div className="Container">
              <switch> 
                <Route path="/" exact component={Acceuil}></Route>
                <Route path="/utilisateurs" component={ListUtilisateur}></Route>
                <Route path="/medecin-recherche"component={MedecinRechercheComponent}></Route>
                <Route path="/ajout-utilisateur" component={AjoutUtilisateurComponent}></Route>

                
                
              </switch>
            </div>
            <FooterComponent/>
          
      </Router>
    </div>
    
  );
}

export default App;
