import { FlatList } from 'react-native'
import { Timepotes } from '../../components/ListarPotes'
import { Container } from './styles'
import { useState, useEffect } from 'react'
import api from '../../services/api'




export function Potes() {


    const [pote1, setPote1] = useState([])
    const [pote2, setPote2] = useState([])
    const [pote3, setPote3] = useState([])
    const [pote4, setPote4] = useState([])



    useEffect(async () => {
        const resultado = await api.get("pote/obterpotes");
        setPote1(resultado.data[0].integrantes);
        setPote2(resultado.data[1].integrantes);
        setPote3(resultado.data[2].integrantes);
        setPote4(resultado.data[3].integrantes);


    }, []);

    return (
        <Container>
            <FlatList
                data={pote1}
                keyExtractor={item => item.idPais}
                renderItem={({ item }) => (
                    <Timepotes item={item} />

                )}

            />

            <FlatList
                data={pote2}
                keyExtractor={item => item.idPais}
                renderItem={({ item }) => (
                    <Timepotes item={item} />

                )}

            />
            <FlatList
                data={pote3}
                keyExtractor={item => item.idPais}
                renderItem={({ item }) => (
                    <Timepotes item={item} />

                )}

            />

            <FlatList
                data={pote4}
                keyExtractor={item => item.idPais}
                renderItem={({ item }) => (
                    <Timepotes item={item} />

                )}

            />

        </Container>
    )
}