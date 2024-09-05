import { Avatar } from "../components/styleds/Avatar";
import { Button } from "../components/styleds/Button";
import { Card } from "../components/styleds/Card";
import { Container } from "../components/styleds/Container";
import { Divider } from "../components/styleds/Divider";
import { MainBanner } from "../components/styleds/MainBanner";
import { SectionCards } from "../components/styleds/SectionCards";
import { Title } from "../components/styleds/Title";

export function Home(){
    return( 
    <>

    <MainBanner>

    <Title color = "pink">Home Page</Title>

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque, fugiat obcaecati quibusdam ex pariatur soluta? Necessitatibus 
    </p>

    <Button> Saiba Mais</Button>

    </MainBanner>

    <SectionCards/>

    <Divider/>
    
    </>
    

);
}