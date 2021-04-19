import React, { Component } from 'react'
import UtilisateurService from '../../services/UtilisateurService'
export default class ListUtilisateur extends Component {

    constructor(props){
        super(props)
        this.state={
          utilisateurs:[]
        }
        this.ajoutUtilisateur=this.ajoutUtilisateur.bind(this)
    }
    componentDidMount(){
        UtilisateurService.getUtilisateur().then((res)=>{
            this.setState({utilisateurs:res.data})
        });
    }
    ajoutUtilisateur(){
        this.props.history.push('/ajout-utilisateur');
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Liste des utilisateurs</h2>
                 <div className="row">
                     <button className="btn-btn-primary" onClick={this.ajoutUtilisateur}>Ajout utilisateur</button>
                 </div>
                 <div className="row">
                     <table className="table table-striped table-bordered">
                      <thead>
                          <tr>
                              <th>Nom</th>
                              <th>Prenom</th>
                              <th>Role</th>
                              <th>E-mail</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              this.state.utilisateurs.map(
                                utilisateur=>
                                <tr key={utilisateur.id}>
                                    <th>{utilisateur.nom}</th>
                                    <th>{utilisateur.prenom}</th>
                                    <th>{utilisateur.role}</th>
                                    <th>{utilisateur.email}</th>
                                </tr>
                              )
                                 
                              }
                          
                      </tbody>
                     </table>
                 </div>
            </div>
        )
    }
}
