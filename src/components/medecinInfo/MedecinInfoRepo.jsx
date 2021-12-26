
import { Modal,Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import Calendrier from '../calendrier/Calendrier';
import { useState} from "react";
import RdvModal from '../rdvDisponible/RdvModal';
import RdvService from '../../services/RdvService';
const MedecinInfoRepo=(props)=>{
   
    const{nom,prenom,tel,specialite,medecinId}=props
    
    
    
    
    return(
      <>
        <div className="container">
                    <div className="row">
                        <div className=" card col-md-4 text-left">
                            <span>Mon medecin</span>
                            <span>{nom}</span>
                            <span>{prenom}</span>
                            <span>{tel}</span>
                            <span>{specialite}</span>
                            
                        </div>
                        
                        
                    </div>
                    

                </div>
               
      </>
    )
}
export default MedecinInfoRepo ;