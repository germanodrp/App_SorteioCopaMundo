import { Image, Button } from "react-native";
import { Times } from "../../components/Times";
import { Container, SectionLogo } from './styles'
import { useApi } from "../../hooks/useApi";

export function Home() {

    function openPotes({ navigation }) {

        navigation.navigate("potes")
    }


    const times = [
        { id: 1, nome: "Brasil" },
        { id: 2, nome: "Argentina" },
        { id: 3, nome: "Alemanha" },
        { id: 4, nome: "Uruguai" }
    ];

    const { data } = useApi('pote/obterpotes')

    console.log(data)


    return (
        <Container>

            <SectionLogo>
                <Image
                    style={{
                        width: 250,
                        height: 298.69,
                        alignItems: 'center'
                    }}
                    source={require("../../assets/CopaMundo.png")} />
            </SectionLogo>



            {times.map(times => (
                <Times
                    key={times.id}
                    nome={times.nome}

                />
            ))}



        </Container>
    )

}