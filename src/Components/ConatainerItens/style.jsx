import styled from "styled-components";

export const SecondContainer = styled.div`
    background: linear-gradient(rgba(139, 139, 139, 0.719), #5d18ff5e );
    border-radius: 31px 31px 0px 0px;
    height:100%;
    padding: 40px 26px;
    display: flex;
    flex-direction: column;  

    ${  
        (props)=> props.isBlur && 
        `
        backdrop-filter: blur(20px);
        min-height: calc(100vh - (60px + 74.67px));
        `
    }


`