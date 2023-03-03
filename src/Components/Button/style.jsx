import styled from 'styled-components'

export const ContainerButton = styled.button`
    margin-top: 50px;
    border-radius: 10px;
    padding:15px;
    width: 250px;

    display: flex;
    justify-content: center;
    gap:10px;

    font-weight: 700;
    font-size: 17px;    

    cursor: pointer;   
    
    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity:0.6;
    }

    //Teste segundo botao
    background: ${props => props.isBack ? 'transparent': 'black'};
    border: ${props => props.isBack && '1px solid #fff'};

    ${props => props.isBack && 'img{transform: rotateY(180deg)}'}
    
    
    
`
