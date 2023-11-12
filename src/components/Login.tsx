import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from 'axios';
import Cookies from "js-cookie";


function Login() {

    interface userRequest {
        email: string;
        senha: string;
    }

    interface userIdRequest {
        id: number;
    }

    interface AuthReponse {
        success: boolean;
    }

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        senha: ''
    });

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }


    const fazerLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("LoginData: " + JSON.stringify(loginData))
        axios.post<boolean>('http://localhost:8080/usuario/verificarUsuario', JSON.stringify(loginData), {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                const isVerified: boolean = response.data;

                if (isVerified) {
                    console.log("Deu!")
                    axios.post<userIdRequest>('http://localhost:8080/usuario/getUsuario', JSON.stringify(loginData), {
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then(response => {
                            const longValue: number = response.data.id;
                            console.log("Response: " + response.data);

                            Cookies.set('token', JSON.stringify(response.data));
                            console.log("Valor do cookie: ", Cookies.get('token'));

                            navigate("/index");
                        })
                        .catch(error => {
                            console.error('Erro na requisicao: ', error);
                        })

                } else {
                    console.log('Dados invalidos!');
                }
            })
            .catch(error => {
                console.error('Erro na requisição: ', error);
            });

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
                required />

            <input type="password"
                placeholder="Senha"
                id="senha"
                name="senha"
                value={loginData.senha}
                onChange={handleInputChange}
                required />
            <button type="submit">Entrar</button>
        </form>
        <Link className="link" to={"/CreateUser"}>Crie sua conta</Link>
    </div>
}

export default Login;