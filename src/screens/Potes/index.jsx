import { FlatList } from 'react-native'
import { Timepotes } from '../../components/Potes'
import { Container } from './styles'
import {useApi} from '../../hooks/useApi'
import { useState, useEffect } from 'react'
import api from '../../services/api'
export function Potes() {

    const timesPotes = [
        { idPote: 1, descricao: 'Pote 1', time: 'Brasil', },
        { idPote: 2, descricao: 'Pote 2', time: 'Alemanha' },
        { idPote: 3, descricao: 'Pote 3', time: 'França' },
        { idPote: 4, descricao: 'Pote 4', time: 'Croacia' },

    ]

        //  const {data} = useApi("pote/obterpotes")
        //     console.log(data)

       const [pote11, setPote1] = useState([])
        useEffect(async () => {
                 let resultado = await api.get("pote/obterpotes");
                    console.log(resultado.data)
                    setPote1(resultado.data[0].integrantes);
            }, []);

            console.log(pote11)
    return (
        <Container>
            <FlatList
                data={pote11}
                keyExtractor={item => item.idPais}
                renderItem={({ item }) => (
                    <Timepotes item={item} />
                    
                )}

            />
        </Container>
    )
}