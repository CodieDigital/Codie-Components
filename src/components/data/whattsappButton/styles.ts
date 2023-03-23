import styled from 'styled-components'

export const WhattsappButton = styled.div`
  max-width: 260px;
  width: 100%;
  height: 48px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  transition: all 0.4s ease-in-out 0s;
  background-size: 300% 100%;
  background-image: linear-gradient(270deg, #17c834 0%, #1da333 45%, #17c834 70%, #1da333 100%);

  &:hover {
    transition: all 0.4s ease-in-out 0s;
    background-position: 39% 0;
    color: #fff;
    text-decoration: none;
  }

  svg {
    fill: #fff;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    max-width: 250px;
    height: 46px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 230px;
    height: 44px;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 220px;
    height: 42px;
  }

  @media only screen and (max-width: 900px) {
    max-width: 200px;
    height: 40px;
  }

  @media only screen and (max-width: 768px) {
    height: 38px;
  }

  @media only screen and (max-width: 650px) {
    height: 36px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 500px) {
    height: 34px;
  }

  @media only screen and (max-width: 450px) {
  }

  @media only screen and (max-width: 390px) {
    max-width: 190px;
    height: 32px;
  }
`
