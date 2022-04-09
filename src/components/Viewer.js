import React from 'react'
import styled from 'styled-components'


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
   margin-top: 30px;
   display: grid;
   grid-gap: 25px;
   padding: 35px 0px 26px;
   grid-template-columns: repeat(5, minmax(0, 1fr));
   cursor: pointer; 
`

const Wrap = styled.div`
    border: 4px solid rgba(249, 249, 249, 0.1);
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 18px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 18px -10px;
        transform: scale(1.05);
        border: 3px solid gray;
        background: url("/videos/1564674844-disney.mp4");
    }
    
`
