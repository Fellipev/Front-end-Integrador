import { useEffect, useState } from "react";
import { PesoData } from "../interface/PesoData";
import { Row } from "./Row";
import Cookie from 'js-cookie';
import axios from "axios";
import CustomModal from "./CustomModal";
import "./Table.css";
import "./Modal.css";

function Diario() {

    const [listaPesagem, setListaPesagem] = useState<PesoData[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const savePesagem = async (novaPesagem: {peso: number}) => {
        console.log('Nova pesagem: ' + novaPesagem.peso);
        
        const payload = {
            peso: novaPesagem.peso,
            usuario: {
                id: parseInt(Cookie.get('token') || '0', 10)
            }
        };

        console.log('payload: ' + JSON.stringify(payload));

        try {
            await axios.post('http://localhost:8080/peso', JSON.stringify(payload), {
                headers: { 'Content-Type': 'application/json' }
            });

            const response = await axios.get('http://localhost:8080/peso/' + Cookie.get('token'));
            setListaPesagem(response.data);

            closeModal();
        } catch (error) {
            console.error('Erro ao salvar a pesagem: ', error);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8080/peso/' + Cookie.get('token'))
            .then(response => {
                setListaPesagem(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter a lista de pesagem: ', error);
            });
    }, []);

    return <div>
        <h1>Diário de pesagem!</h1>
        <button onClick={openModal}>Adicionar Pesagem</button>

        <CustomModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onSave={savePesagem}
        />

        {listaPesagem.length > 0 ? (
            <table className="tabela">
                <tbody>
                    {listaPesagem.map(pesagem => (
                    <Row
                        key={pesagem.id}
                        usuario={pesagem.usuario}
                        peso={pesagem.peso}
                        dataRegistro={pesagem.dataRegistro}
                    />
                    ))}
                </tbody>
            </table>
        ) : (
            <p>Ainda não há dados de pesagem disponíveis.</p>
        )}
    </div>
}

export default Diario;