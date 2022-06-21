import { useEffect, useState } from 'react'
import api from '../services/api';

export function useApi(url) {

    const [data, setData] = useState([])

    useEffect(
        async () => {
            await api.get(url)
                .then((response) => {
                    setData(response.data)
                })
                .catch(error => console.log(error));
        }, []);


    return { data }


}