import axios from "axios"

const Medecin__API_BASE_URL="http://localhost:8080/api/recherche-medecin/"


class MedecinInfoService{

    async rechercheMedecin(param){
       
    return await axios.get(Medecin__API_BASE_URL,{params:param});
    
}
}
export default new MedecinInfoService()