import { Button } from "../components/styleds/Button";
import { Container } from "../components/styleds/Container";
import { MainBanner } from "../components/styleds/MainBanner";
import { Title } from "../components/styleds/Title";

export function Home(){
    return( 
    <>

    <MainBanner>

    <Title color = "white">Home Page</Title>

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea accusamus inventore possimus exercitationem explicabo repellat 
    </p>

    <Button> Saiba Mais</Button>

    </MainBanner>

    <Container>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officiis voluptate reprehenderit dolores quia odit non laboriosam consequuntur facere beatae labore iste, eos blanditiis repudiandae maiores ducimus est ipsam ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut est eos soluta, aperiam fugiat ad ea harum voluptatibus excepturi inventore, totam consequuntur quo laudantium consectetur rerum corporis facilis quibusdam debitis.
        </p>

    </Container>
    
    </>
    

);
}