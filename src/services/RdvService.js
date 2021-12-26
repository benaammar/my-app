
import axios from "axios"
const RDV_DISPO_API_URL="http://localhost:8080/api/rdv-dispo/"

class RdvService {

    async RdvDispo(param){
        return await axios.get(RDV_DISPO_API_URL,{params:param});
    }

}
export default new RdvService();




