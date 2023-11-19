import { Link } from "react-router-dom";
import { useUserdData } from "../hooks/useUserData"
import { UserData } from "../interface/UserData"
import Cookie from "js-cookie";

function Index() {

    return <div>
        <h1>Easylife</h1><br />
        <Link to={"/diario"}><button>Diário</button></Link>
        <div className="news">
            <img src="https://uploads.metropoles.com/wp-content/uploads/2023/11/16132624/Kefera-Buchmann-1.jpg" alt="" />
            <p>Comer pepino com pó de gelatina diet?<br /> Dica de Kéfera para combater compulsão alimentar é criticada<br /> por nutricionistas; entenda</p>
        </div>
        <div className="news">
            <img src="https://sindibel.com.br/wp-content/uploads/2023/11/calor.jpg" alt="" />
            <p>Entenda o que é onda de calor</p>
        </div>
        <div className="news">
            <img src="https://spdm.org.br/wp-content/uploads/2016/02/k2_items_src_7a661f4578d6880820a03cd87a994a3c.jpg" alt="" />
            <p>Desidratação no calor: xixi é<br />'termômetro' para evitar quadro;<br />crianças e idosos correm maior risco</p>
        </div>
        </div>
}

export default Index;