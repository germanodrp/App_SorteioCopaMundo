import { TeamName, Container } from './styles'

export function Timepotes({item}) {
    return (
        <>
            <Container>
                <TeamName>{item.nome}</TeamName>
            </Container>
        </>
    )
}