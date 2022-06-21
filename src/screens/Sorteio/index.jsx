
import { FlatList } from 'react-native'
import Button from '../../components/Button'
import { Timegrupos } from '../../components/Grupos'
import { Container, Title, SectionGrupos } from './styles'

export function Sorteio() {
   
    const timesGrupos = [
        { idGrupo: 1, descricao: 'Grupo A'},
        { idGrupo: 2, descricao: 'Grupo B'},
        { idGrupo: 3, descricao: 'Grupo C'},
        { idGrupo: 4, descricao: 'Grupo D'},
        { idGrupo: 5, descricao: 'Grupo E'},
        { idGrupo: 6, descricao: 'Grupo F'},
        { idGrupo: 7, descricao: 'Grupo G'},
        { idGrupo: 8, descricao: 'Grupo H'}

    ]
    

    return (
        <Container>
           
            <FlatList
            data={timesGrupos}
            keyExtractor={item => item.idGrupo}
            renderItem={({ item }) => (
                <Timegrupos timesGrupos={item} />
            )}

        />
        <Button/>
        
      
        </Container>
        
        
 
   
    )
}