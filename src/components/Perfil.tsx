import { useUserdData } from "../hooks/useUserData"
import { UserData } from "../interface/UserData"

function Perfil() {
    const {data} = useUserdData();

    return <div>
        <h1>Bem vindo!</h1>
        {/* {data?.map(userData => 

        )} */}
    </div>
}