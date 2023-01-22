import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
function Section({title,descp,carImg,leftBtn,rightBtn}) {
  return (
    <Wrap bgImg={carImg}>
        <Fade top>
            <TitleText>
                <h1>{title}</h1>
                <p>{descp}</p>
            </TitleText>
        </Fade>
        <Fade bottom>
            <Button>
                <ButtonGrp>
                    {leftBtn && 
                        <LeftButton>{leftBtn}</LeftButton>
                    }
                    {rightBtn && 
                        <RightButton>{rightBtn}</RightButton>
                    }
                </ButtonGrp>
                <DownArrow src='/images/down-arrow.svg'></DownArrow>
            </Button>
        </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.bgImg})`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const TitleText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGrp = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
`

const Button = styled.div`
`