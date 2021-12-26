import React, { useState,useEffect } from 'react'
import { useHistory } from "react-router-dom";
import RdvService from '../../services/RdvService';
import MedecinInfoService from '../../services/MedecinInfoService';
import Calendrier from '../calendrier/Calendrier';
import MedecinInfoRepo from './MedecinInfoRepo'
import DatePicker from 'react-datepicker';
import { Col, Container, Row } from 'react-bootstrap';

const MedecinRechercheComponent =()=> {
    const history=useHistory();
    const param=history.location.state?.data
    
    console.log(param);
    const [medecins, setMedecins] = useState([]);
    const [date,setDate]=useState();
    const [show, setShow] = useState(false);
    
    const RdvDispo=(selectedDate)=>{
        setShow(true);
        setDate(selectedDate);
  
        
      }

   
const getData=()=>{
MedecinInfoService.rechercheMedecin(param).then(res=>{console.log(res.data)
setMedecins(res.data)}).catch(err=>console.log(err));
}
 useEffect(()=>
              {
                getData();
                console.log(medecins)
            
               },[]); 

        return (

            <>
            <Container>
               <Row>
                   <Col>
                {
                (medecins.map(medecin=>
                    <MedecinInfoRepo 
                    key={medecin.id}
                    nom={medecin.utilisateur.nom}
                    prenom={medecin.utilisateur.prenom}
                    tel={medecin.utilisateur.tel}
                    specialite={medecin.specialite}
                    medecinId={medecin.id}
                        
                    />

                    
        ))
                }
                </Col>
                <Col>
                 <div className="card col-md-8">
                            <h6> Choisissez une date </h6> 
                          <DatePicker selected={date} onChange={RdvDispo} />
                          
                          {/* <RdvModal show={show} tab={RdvService.RdvDispo({medecinId},{date})} heure></RdvModal>*/}
                  </div>
                  </Col>
                  </Row>
                  </Container>
                   
                
            </>
        )
    }
export default MedecinRechercheComponent ;
