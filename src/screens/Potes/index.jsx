import { FlatList } from 'react-native'
import { Timepotes } from '../../components/Potes'
import { Container, Title, SectionPotes } from './styles'


export function Potes() {

    const timesPotes = [
        { idPote: 1, descricao: 'Pote 1', time: 'Brasil', },
        { idPote: 2, descricao: 'Pote 2', time: 'Alemanha' },
        { idPote: 3, descricao: 'Pote 3', time: 'França' },
        { idPote: 4, descricao: 'Pote 4', time: 'Croacia' },

    ]


    return (
        <Container>
            <FlatList
                data={timesPotes}
                keyExtractor={item => item.idPote}
                renderItem={({ item }) => (
                    <Timepotes timesPotes={item} />
                )}

            />
        </Container>
    )
}