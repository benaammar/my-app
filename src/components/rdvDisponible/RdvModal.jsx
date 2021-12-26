
import { Modal,Button } from 'react-bootstrap';
 import PropTypes from 'prop-types';
const RdvModal=(props)=>{

const {tab=new Boolean([24]),show,heure}=props;
const closeModal=()=>{
    console.log("hello")
}

  return 
       <>
          <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        {
                            (tab.map(element=>{
                                <Button>{heure} </Button>
                            }))
                        }
                        
                      </ Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                
                </Modal.Footer>
       </Modal>
       </>
}
export default RdvModal ;