import React, { Component } from 'react'
import UtilisateurService from '../../services/UtilisateurService';

export default class AjoutUtilisateurComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            nom:"",
            prenom:"",
            email:"",
            passworld:"",
            tel:""
            
        }
        this.nomChangeHandler=this.nomChangeHandler.bind(this);
        this.preNomChangeHandler=this.preNomChangeHandler.bind(this);
        this.eMailChangeHandler=this.eMailChangeHandler.bind(this);
        this.telChangeHandler=this.telChangeHandler.bind(this);
        this.passWordChangeHandler=this.passWordChangeHandler.bind(this);
        this.cancel=this.cancel.bind(this);
    
    }
    nomChangeHandler=(event)=>{
        this.setState({nom : event.target.value}); 

    }
    preNomChangeHandler=(event)=>{
        this.setState({prenom : event.target.value}); 

    }
    telChangeHandler=(event)=>{
        this.setState({tel : event.target.value}); 

    }
    eMailChangeHandler=(event)=>{
        this.setState({email : event.target.value}); 

    }
    passWordChangeHandler=(event)=>{
        this.setState({passWorld : event.target.value}); 

    }
    ajoutUtilisateur=(e)=>{
        e.preventDefault();
        let utilisateur={nom:this.state.nom,prenom:this.state.prenom,email:this.state.email,tel:this.state.tel,password:this.state.password};
        UtilisateurService.ajoutUtilisateur(utilisateur).then(res=>{
            this.props.history.push('/utilisateurs');
        })
    }
    cancel=(props)=>{
        this.props.history.push('/utilisateurs');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Ajouter un utilisateur</h3>
                            <div className="card-body">
                                <from >
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input className="form-control" name="nom" placeholder="nom" value={this.state.nom} onChange={this.nomChangeHandler} type="text"></input>

                                    </div>
                                    <div className="form-group">
                                        <label>Prénom</label>
                                        <input className="form-control" name="prenom" placeholder="prenom" value={this.state.prenom} onChange={this.preNomChangeHandler}></input>

                                    </div>
                                    <div className="form-group">
                                        <label>Tél</label>
                                        <input  className="form-control" name="tel" placeholder="tél" value={this.state.tel} onChange={this.telChangeHandler}></input>

                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="email" value={this.state.email} onChange={this.eMailChangeHandler}></input>

                                    </div>
                                    <div className="form-group">
                                        <label>Mot de passe</label>
                                        <input type="password" className="form-control" name="passeword" placeholder="mot de passe" value={this.state.password} onChange={this.passWordChangeHandler}></input>

                                    </div>
                                    <button className="btn btn-success" onClick={this.ajoutUtilisateur}> Ajouter</button>
                                    <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                                </from>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
