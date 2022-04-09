import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
                <LogoOne>
                    <img src="/images/cta-logo-one.svg"/>
                </LogoOne>
                <Button>
                    <p>GET ALL THERE</p>
                </Button>
                <Description>
                    Get premier Access to Raya and the Last Dragon for an 
                    additional fee with a Disney+ subscription. As of 03/26/21, the price od Disney+
                    and the Disney Bundle will increase by $1.
                </Description>
                <LogoTwo><img src="/images/cta-logo-two.png"/>
                </LogoTwo>
            </Content>
        </Container>
    )
}

export default Login


const Container = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    

    &:before {
        content: "";
        background: url("/images/login-background.jpg");
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        opacity: 0.7;
    }
  
`
const Content = styled.div`
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const LogoOne = styled.div `
    margin: 0 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
`
const Button = styled.div `
    margin: 0 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0063e5;
    width: 34.2rem;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 250ms;
    p {
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 2px;
    }
    &:hover {
        background: #0483ee;
    }
`
const Description = styled.div `

    margin: 0 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: rgba(249, 249, 249, 0.5);
    width: 555px;
    line-height: 20px;
    font-size: 16px;   
`
const LogoTwo = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 550px;
    }      
`
