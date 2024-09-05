import "styled-components"

declare module "style-componentes"{
    export interface DefaultTheme{
        backgroundColor: string;
        textColor: string;
        primaryColor: string;
    }
    //vai unificar o tema padrao com o as propriedades que queremos, é util para o codigo nao quebrar 
}
//declara uma tipagem dentro do meu modulo do style components, eé usado para farzermos tipagens personalizadas 