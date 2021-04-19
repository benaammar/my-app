import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import MedecinInfoService from '../../services/MedecinInfoService';

const MedecinRechercheComponent =()=> {
    const history=useHistory();
    const param=history.location.state?.data
    
    console.log(param);
    const [medecins, setMedecins] = useState([]);

     MedecinInfoService.rechercheMedecin(param).then(async data=>{
    await console.log(data);
    setMedecins(data) 
console.log(medecins[0])}
    )

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className=" card col-md-4 text-left">
                            <span>Mon medecin</span>
                        </div>
                        <div className="card col-md-8">
                           <span>Mon tableau</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
export default MedecinRechercheComponent ;
