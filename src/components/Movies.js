import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
                <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                   <a href="/detail"> <img src="/movies/incredibles.jpg" /></a>
                </Wrap>
                <Wrap>
                    <img src="/movies/2.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/movies/10.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/movies/6.jpg" />
                </Wrap>
            </Content>
            <Line>
                <h4>New to Disney</h4>
            </Line>
            <Content>
                    <Wrap>
                        <img src="/movies/3.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/movies/11.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/movies/22.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/movies/13.jpg" />
                    </Wrap>
            </Content>
            <h4>Thrill</h4>
            <Content>
                    <Wrap>
                        <img src="/movies/19.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/movies/20.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/movies/16.jpg" />
                    </Wrap>
                    <Wrap>
                        <img src="/movies/21.jpg" />
                    </Wrap>
            </Content>
            <h4>Old</h4>
            <Content>
                <Wrap>
                    <img src="/movies/18.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/movies/23.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/movies/24.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/movies/25.jpg" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    margin: 0 120px;
    min-height: 100vw;
    h4 {
        color: white;
        letter-spacing: 2px;
        font-size: 30px;
        padding: 30px 0;
        font-weight: bold;
    }
`
const Content = styled.div`
    margin-top: 30px;
    display: grid;
    grid-column-gap: 50px;
    padding: 35px 0px 26px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    cursor: pointer; 
    justify-content: center;
    padding-left: 20px;

`

const Wrap = styled.div`
    border-radius: 12px;
    border: 3px solid transparent;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 18px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    &:hover {
        border-color: gray;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 18px -10px;
        img {
            transform: scale(1.1);
        }
    }
`

const Line= styled.div`
    h4 {
        position: relative;
        &:before {
            position: absolute;
            background: white;
            content: "";
            top: 8px;
            bottom: 0;
            right: 0;
            left: 0;
            width: 32rem;
            height: 2px;
            border-radius: 50px;
            margin-top: 15px;
           
            }
        }   
`