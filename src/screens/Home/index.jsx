import { Image } from "react-native";
import { Container, SectionLogo, TextHome } from './styles'


export function Home() {

    return (
        <Container>

            <SectionLogo>
                <Image
                    style={{
                        width: 250,
                        height: 300,
                        alignItems: 'center'
                    }}
                    source={require("../../assets/CopaMundo.png")} />
            </SectionLogo>

            <TextHome>Bem vindo(a)! ao sorteio da Copa do Mundo Qatar 2022</TextHome>

        </Container>

    )
}