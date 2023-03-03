import styled from 'styled-components'
import bgImg from '../../assets/backGround.svg'

export const Container = styled.div`
    background: url("${bgImg}");
    background-size: cover;

    display:flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    min-height: 100vh;
`
export const Image = styled.img`
    width: 230px;
    margin:30px 0px;
    
`

export const LabelInput = styled.p`
    margin-left: 15px;

    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    
`
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    padding:15px;
    margin-bottom: 15px;

    font-weight: 400;
    font-size: 18px;
    
`
export const User = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 8px;
    margin-top: 20px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    padding:15px;

    

    p{
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
    }
    
    img{
        width: 20px;
        cursor: pointer;
    }
`