import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <a href="/login">
                <UserImage src="/images/safeer-dp.jpg" />
            </a>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: cetnre;
    padding: 0 36px;
    overflow-x: hidden; 
`

const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: 50px;

    a {
        display: flex;
        align-items: center;
        color: white;
        letter-spacing: 2px;
        font-size: 15px;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
       
        img {
            height: 20px;
            margin: 0 8px 0 0;
            border: none;
        }
        span {
            position: relative;
            z-index: 1;
            &:after {
                content: "";
                background: white;
                position: absolute;
                height: 1.5px;
                border-radius: 20px;
                opacity: 0;
                bottom: -6px;
                right: 0;
                left: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
    }
    a:hover {
        span:after {
            opacity: 1;
            transform: scaleX(1);
        }
    }
`
const UserImage = styled.img`
    border-radius: 50px;
    height: 55px;
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    border: 2px solid black; 
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
        transform: scale(1.12);
    }
`
