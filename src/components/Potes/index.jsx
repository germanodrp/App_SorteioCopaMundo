import { TeamName, Container, Title } from './styles'

export function Timepotes({ timesPotes }) {
    return (
        <>
            <Title>{timesPotes.descricao}</Title>
            <Container>
                <TeamName>{timesPotes.time}</TeamName>
                <TeamName>{timesPotes.time}</TeamName>
                <TeamName>{timesPotes.time}</TeamName>
                <TeamName>{timesPotes.time}</TeamName>
                <TeamName>{timesPotes.time}</TeamName>
                <TeamName>{timesPotes.time}</TeamName>
                <TeamName>{timesPotes.time}</TeamName>
                <TeamName>{timesPotes.time}</TeamName>
            </Container>
        </>
    )
}