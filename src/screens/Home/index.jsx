import { Image } from "react-native";
import { Container, SectionLogo } from './styles'


export function Home() {

    return (
        <Container>

            <SectionLogo>
                <Image
                    style={{
                        width: 250,
                        height: 300,
                        alignItems: 'center',
                        marginLeft: 70,
                        marginTop: "30%"
                    }}
                    source={require("../../assets/CopaMundo.png")} />
            </SectionLogo>

        </Container>

    )


}