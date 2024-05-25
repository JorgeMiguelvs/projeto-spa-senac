import styled from "styled-components";
//Nossos componentes de estilos para os textos (titulo,subtitulo,texto..)


//criar um componente
export const Titulo = styled.h1` //só posso yusar ele em outro arquivo se exportar
    font-size:${props=>props.tamanho || '32px'}; // se n for informado, será 32 px
    color:${props=>props.cor || 'black'};
    line-weight:1.5rem;
        
`;
//props passar valor pro meu componente