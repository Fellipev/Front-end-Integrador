import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email : '',
        senha : ''
    });

    const handleInputChange = (e: {target : {name: any; value: any;}; }) => {
        const {name, value} = e.target;
        setLoginData({...loginData, [name]: value});
    }

    const fazerLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Email: " + loginData.email)
        console.log("Senha: " + loginData.senha)
    }

    return <div>
        <h1>Login</h1>
        <form className="form" onSubmit={fazerLogin}>
            <input type="email" 
            placeholder="E-mail" 
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            required/>

            <input type="password" 
            placeholder="Senha"
            id="senha"
            name="senha"
            value={loginData.senha}
            onChange={handleInputChange}
             required/>
            <button type="submit">Entrar</button>
        </form>
        <Link className="link" to={"/CreateUser"}>Crie sua conta</Link>
    </div>
}

export default Login;