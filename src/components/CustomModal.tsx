import { useState } from "react";
import Modal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (novaPesagem: { peso: number; }) => void;
}

Modal.setAppElement('#root');

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
    const [peso, setPeso] = useState('');
    
    const handleSave = () => {

        onSave({
            peso: parseFloat(peso)
        });

        setPeso('');

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Adicionar Pesagem"
        >
            <h2>Adicionar Pesagem</h2>
            <label>
                Peso:
                <input 
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                 />
            </label>
            <br />
            <button onClick={handleSave}>Salvar</button>
            <button onClick={onClose}>Cancelar</button>
        </Modal>
    );
};

export default CustomModal;