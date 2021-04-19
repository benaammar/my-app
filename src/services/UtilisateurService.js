
import axios from "axios";


const Utilisateur_API_BASE_URL="http://localhost:8080/api/list-utilisateur";



class UtilisateurService{
    getUtilisateur(){
        return axios.get(Utilisateur_API_BASE_URL);
    }
    ajoutUtilisateur(utilisateur){
      return axios.post(Utilisateur_API_BASE_URL,utilisateur)
    }

}
export default new UtilisateurService();