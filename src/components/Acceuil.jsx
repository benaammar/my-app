import React, { Component, createContext } from 'react';
import MedecinInfoService from '../services/MedecinInfoService';
import { useState,useContext} from "react";
import Context from '../context/Context';
import { useHistory } from "react-router-dom";

const Acceuil =()=> {
   const[ville,setVille] = useState("");
   const[specialite,setSpecialite]=useState("");
   const context = useContext(Context);
   const history=useHistory()
       

    
       
    const specialiteChangehandler=(event)=>{
      event.preventDefault()
      setSpecialite(event.target.value) ; 
      
        
    }
   
   const rechercher=()=>{
        
        
        console.log(specialite);
        
        
        history.push({pathname:"/medecin-recherche",state:{data:{specialite,ville}}})
       /* MedecinInfoService.rechercheMedecin(specialite,ville).then(res=>{
            
        })*/
            
        
    }
   
    
        return (
           
           <div className="container">
              
                    <div className="row" >
                        <div className="card col-md- 6 offset-md-3">
                            <span className="text-center">Rechercher un medecin par spécialité ou ville</span>
                            <div className="card-body">
                                
                                <input type="text" placeholder="spécialité..." value={specialite} onChange={specialiteChangehandler}></input>
                                <input type="text" placeholder="ville..." value={ville} onChange={e=>setVille(e.target.value)}></input>
                                <div className="text-center">
                                    <button class="btn btn-primary " onClick={rechercher}>Rechercher</button>
                                </div>
                                
                            </div>
                        </div>
                       
                    </div>
                
            </div>
              
        )
    
}
export default Acceuil ;
