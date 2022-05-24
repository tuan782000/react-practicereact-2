import { Modal, Button } from 'react-bootstrap';
import { deleteUser } from '../services/UserService';
import { toast } from 'react-toastify';
const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } = props;
    const confirmDelete = async () => {
        let res = await deleteUser(dataUserDelete.id)
        if(res && +res.statusCode === 204){
            toast.success("Delete User Succeed!");
            handleClose();
            handleDeleteUserFromModal(dataUserDelete);
        }else{
            toast.error("error Delete user")
        }
    }

    return (<>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Delete a User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='body-add-new'>
                   This user, this action can't be undone!


                   Do you want delete this user?,<br/> <b> email = {dataUserDelete.email}?</b>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => confirmDelete()}>
                   Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default ModalConfirm;