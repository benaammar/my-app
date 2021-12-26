
import axios from "axios";


const Utilisateur_API_BASE_URL="http://localhost:8080/api/list-utilisateur";
const TEST_LOGIN_API_BASE_URL="http://localhost:8080/api/test-login";


class UtilisateurService{
    getUtilisateur(){
        return axios.get(Utilisateur_API_BASE_URL);
    }
    ajoutUtilisateur(utilisateur){
      return axios.post(Utilisateur_API_BASE_URL,utilisateur)
    }
    testLogin(param1,param2){
      return  axios.post(TEST_LOGIN_API_BASE_URL,{param:{param1,param2}});
    }

}
export default new UtilisateurService();