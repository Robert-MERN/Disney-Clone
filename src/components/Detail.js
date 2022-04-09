import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
        <BG> </BG>
        <Content>
            <Logos>
                <Top>
                    <img src="/images/top.png" />
                </Top>
                <Bottom>
                    <img src="/images/bottom.png" />
                </Bottom>
            </Logos>
            <Buttons>
                <FirstBtn>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </FirstBtn>
                <SecondBtn>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </SecondBtn>
                <ThirdBtn>
                    <span>+</span>
                </ThirdBtn>
                <FourthBtn>
                    <img src="/images/group-icon.png" />
                </FourthBtn>
            </Buttons>
            <Subtitle>
                2018 • 7m • Family, Fantasy, Kids, Animation
            </Subtitle>
            <Description>
                The Super-Heroes who are incredibally amazing they have lot of power
                they used to do lot of fun<br/>  i am muneeb ahmed safeer is a good boy 
                mustafa is also a good boy no one can make movie like <br/>this  
                we have done a great vfx and animation in it we hired the world best animator and than we<br/> made
                this possibaly.
            </Description>
        </Content>
        </Container>
        
    )
}

export default Detail

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    padding: 0 100px;  
`
const BG = styled.div`
    background-image: url("/images/fullFit.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content:"";
    top:0;
    bottom:0;
    right: 0;
    left: 0;
    opacity: 0.5;
    z-index: -1;
`
const Content = styled.div`

`

const Logos = styled.div`
    display: flex;
    margin-top: 60px;
    flex-direction: column;
`
const Top = styled.div`

    img {
        width: 150px;
    }  
`
const Bottom = styled.div`
    img {
        width: 35%;
    }
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin: 100px 0 0 0;
    transition: all 250ms;
`

const FirstBtn = styled.div`
    background: rgb(249, 249, 249);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin: 0 22px 0 0;
    font-size: 18px;
    border: none;
    height: 50px;
    padding: 0 24px;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: all 250ms;
    img {
        transition: all 250ms;
    }
    span {
        transition: all 250ms;
    }

    &:hover {
        background: rgba(198, 198, 198, 0.5);
        transform: scale(1.04);
      
    }
    
`
const SecondBtn = styled(FirstBtn)`
    background: rgba(0, 0, 0, 0.5);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
    
`
const ThirdBtn = styled.div`
    display: flex;
    background: white;
    width: 40px;
    height: 40px;
    padding: 0 1px 6px 0px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 22px;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    cursor: pointer;
    transition: all 250ms; 
    span {
        font-size: 30px;
    }

    &:hover {
        background: rgba(198, 198, 198, 0.5);
        transform: scale(1.05);
    }   
`
const FourthBtn = styled.div`
    display: flex;
    background: white;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 22px;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
        background: rgba(198, 198, 198, 0.5);
        transform: scale(1.05);
    }        
`

const Subtitle = styled.p`
color: rgb(249, 249, 249);
  font-weight: bold;
  font-size: 15px;
  margin-top: 60px;  
`

const Description = styled.p`
    color: rgb(249, 249, 249);
    font-size: 20px;
    line-height: 1.4;

`