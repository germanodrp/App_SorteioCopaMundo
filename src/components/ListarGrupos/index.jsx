import { TeamName, Container, Title } from './styles'

export function Timegrupos({ timesGrupos }) {
    return (
        <>
            <Title>{timesGrupos.descricao}</Title>
            <Container>
                <TeamName>{timesGrupos.time}</TeamName>
                <TeamName>{timesGrupos.time}</TeamName>
                <TeamName>{timesGrupos.time}</TeamName>
                <TeamName>{timesGrupos.time}</TeamName>
              
                
            </Container>
        </>
    )
}