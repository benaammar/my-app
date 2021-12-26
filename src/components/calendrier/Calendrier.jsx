import {useState,useEffect,useMemo} from 'react'
import DatePicker from 'react-datepicker';
const Calendrier=()=>{
 
     
    const [tabDate,setTabDate]=useState([]);
    const [jourDebut,setJourDebut]=useState(new Date().getDate());
    const [moisDebut,setMoisDebut]=useState(new Date().getMonth());
    const [anneeDebut,setAneeeDebut]=useState(new Date().getFullYear());
   
    const testDate=(mois,jour,annee)=>{
        
        switch(mois){
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:    
            case 11:
            
                if (jour>=31){
                    mois++;
                    jour=1;
                }
                else 
                jour++;
               break;
            case 4:
            case 6:
            case 8:
            case 10:
               if(jour>=30){
                   mois++;
                   jour=1;
               } 
              
              break; 
            case 12:
                annee++;
                mois=1;
                jour=1;
              break;  
            case 2:
                if (annee%4){
                    if(jour>=29){
                        mois++;
                        jour=1;
                    }
                   
                    
                } 
                else{
                    if (jour>=28){
                        mois++;
                        jour=1;
                    }
                   
                }     

          break;
        }
    }
   const getTabDate=(jour,mois,annee)=>{
    var tab=new Array();
       for( var i=1;i<8;i++){
        switch(mois){
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:    
            case 11:
            
                if (jour>=31){
                    mois++;
                    jour=1;
                }
                else 
                jour++;
               break;
            case 4:
            case 6:
            case 8:
            case 10:
               if(jour>=30){
                   mois++;
                   jour=1;
               } 
              
              break; 
            case 12:
                annee++;
                mois=1;
                jour=1;
              break;  
            case 2:
                if (annee%4){
                    if(jour>=29){
                        mois++;
                        jour=1;
                    }
                   
                    
                } 
                else{
                    if (jour>=28){
                        mois++;
                        jour=1;
                    }
                   
                }     

          break;
        }
           
           jour++;
           const date={jour:jour,mois:mois,annee:annee};
           tab[i]=date;
       }
       setTabDate(tab);
      
       console.log(tabDate)

   }
  
   useEffect(() => { 
      
     getTabDate(jourDebut,moisDebut,anneeDebut)
       
   }, [jourDebut]);

    return(
        <>
                {(tabDate.map(date=>{

                        <table class="table">
                        <thead>
                        <tr>
                            <th scope="col"> {date}</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">9</th>
                            
                        </tr>
                        </tbody>
                        </table>
                }))}
                
        </>
    )
   
}
export default Calendrier ;