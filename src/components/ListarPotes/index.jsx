import { TeamName, Container, Title } from './styles'

export function Timepotes({ item }) {
    return (
        <>
            <Container>
                <TeamName>{item.nome}</TeamName>
            </Container>
        </>
    )
}