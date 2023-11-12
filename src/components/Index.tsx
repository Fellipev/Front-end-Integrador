import { Link } from "react-router-dom";
import { useUserdData } from "../hooks/useUserData"
import { UserData } from "../interface/UserData"
import Cookie from "js-cookie";

function Index() {

   const teste = () => {
        console.log(Cookie.get('token'));
   }
    

    return <div>
        <h1>Está é a pagina main!</h1>
        <Link to={"/diario"}><button>Diário</button></Link>
        {/* <button onClick={teste}>console</button> */}
    </div>
}

export default Index;