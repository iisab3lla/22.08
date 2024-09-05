import { Avatar } from "./Avatar"
import { Container } from "./Container"
import { Card } from "./Card"
import { Button } from "./Button"

type CardContent = {
    imgSrc: string;
    title: string;
    description: string;
};

const cardsContent = [
    {
        imgSrc: "https://picsum.photos/209",
        imgAlt: "Imagem 1",
        title: "Titulo 1",
        description: 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti harum nulla odit vel error!",
    },
    {
        imgSrc: "https://picsum.photos/209",
        imgAlt: "Imagem 2",
        title: "Titulo 2",
        description: 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti harum nulla odit vel error!",
    },
    {
        imgSrc: "https://picsum.photos/209",
        imgAlt: "Imagem 3",
        title: "Titulo 3",
        description: 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti harum nulla odit vel error!",
    },
];
//const criada para limpar o codigo, ao inves de ter varios cards com descrições, o array vai armazenar os tres e simplificar

export function SectionCards(){
    return(
        <>
         <Container>

            {cardsContent.map((card) => (
                 <Card>

                 <Avatar src={card.imgSrc} alt={card.imgAlt} />
     
                 <h1>{card.title}</h1>
     
                 <p>{card.description}</p>
     
                 <Button>Veja mais</Button>
     
             </Card>
            ))}

        </Container>
        
        
        </>
    )
}