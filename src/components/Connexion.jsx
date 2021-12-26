import { useState} from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap"
import axios from "axios";
import UtilisateurService from "../services/UtilisateurService";



const  Connexion=()=>{
   
    const history=useHistory()
    const[email1,setEmail1]=useState("");
    const [password1,setPassWord1]=useState("");
    

  const emailChangeHandler=(event)=>{
    event.preventDefault()
    setEmail1(event.target.value);
    console.log(email1);
    

  } 
  const passwordChangeHandler=(event)=>{
      event.preventDefault();
      setPassWord1(event.target.value);
  }
  const onSumbitHandler =()=>{
      console.log(email1,password1)
      
      
        axios.post("http://localhost:8080/api/test-login",{},{params:{ email:email1,
        password:password1}}
      ).then(res=>{console.log(res)
        if (res.data==true){
            history.push({pathname:"/"})
        }}
      ).catch((e)=>{console.log(e)})


  }

    return ( 
   
    <div className="container">
        <div className="row">
            <form onSubmit={onSumbitHandler} >
            <div className="card col-md- 3 offset-md-3">
                <span className="text-center">
                    J'ai déjà un compte
                </span>
                <div className="card-body">
                    <div>
                        <input type="text" placeholder="Adresse email"  value={email1} onChange={emailChangeHandler}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="mot de passe" value={password1} onChange={passwordChangeHandler}></input>
                    </div>
                    <div>
                    <Button type="sumbit">Se connecter</Button>
                    </div>
                    
                </div>
            </div>
            </form>
        </div>
    </div>
    
    )
}
export default Connexion ;