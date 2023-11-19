import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateUser() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        senha: '',
    });

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSingupForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        console.log(JSON.stringify(formData));

        fetch('http://localhost:8080/usuario/create', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
           },
           body: JSON.stringify(formData),
        })
        .then(() => {
            console.log(formData);
            navigate('/');
        })
        .catch(error => {
            console.log(error);
        })

    }

    return <div>
        <h1>Criar usuario</h1>
        <form className="form" onSubmit={handleSingupForm}>
            <input type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            placeholder="Nome completo" 
            value={formData.nomeCompleto} 
            onChange={handleInputChange} 
            required/>

            <input type="email" 
            id="email"
            name="email"
            placeholder="Email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required/>

            <input type="password" 
            id="senha"
            name="senha"
            placeholder="Senha" 
            value={formData.senha} 
            onChange={handleInputChange} 
            required/>

            <button type="submit">Cadastrar</button>
        </form>
        <Link to={"/"}>Fazer login</Link>
    </div>
}

export default CreateUser;