import axios, { AxiosPromise } from "axios"
import { UserData } from "../interface/UserData";
import { useQuery } from "react-query";

const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<UserData[]>=> {
    const response = axios.get(API_URL + '/usuario')
    return response;
}

export function useUserdData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['user-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}