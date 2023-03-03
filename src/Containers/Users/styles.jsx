import styled from 'styled-components'
import bgImg from '../../assets/bgImg1.svg'

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
export const SecondContainer = styled.div`
    background: linear-gradient(rgba(139, 139, 139, 0.719) , #4a04ee78 );
    backdrop-filter: blur(20px);
    border-radius: 31px 31px 0px 0px;
    height:100%;
    min-height: calc(100vh - (60px + 74.67px));
    padding: 40px 26px;
    display: flex;
    flex-direction: column;  
`

export const User = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 8px;
    margin-top: 20px;
    background: rgba(100, 34, 253, 0.466);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    padding:15px 30px;
    width: 250px;   

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