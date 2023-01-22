import React, { Component } from 'react'
import styled from 'styled-components';
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model 3"
            descp="Schedule a Demo Drive"
            carImg="/images/model-3.jpg"
            leftBtn="custom order"
            rightBtn="existing inventory"
        />
        <Section 
            title="Model S"
            descp="Schedule a Demo Drive"
            carImg="/images/model-s.jpg"
            leftBtn="custom order"
            rightBtn="existing inventory"
        />
        <Section 
            title="Model X"
            descp="Schedule a Demo Drive"
            carImg="/images/model-x.jpg"
            leftBtn="custom order"
            rightBtn="existing inventory"
        />
        <Section 
            title="Model Y"
            descp="Schedule a Demo Drive"
            carImg="/images/model-y.jpg"
            leftBtn="custom order"
            rightBtn="existing inventory"
        />
        <Section 
            title="Solar Panels"
            descp="Lowest Cost Solar Panels in America"
            carImg="/images/solar-panel.jpg"
            leftBtn="custom order"
            rightBtn="existing inventory"
        />
        <Section 
            title="Solar Roof"
            descp="Produce Clean Energy From Your Roof"
            carImg="/images/solar-roof.jpg"
            leftBtn="custom order"
            rightBtn="existing inventory"
        />
        <Section 
            title="Accessories"
            descp="Order Online for Touchless Delivery"
            carImg="/images/accessories.jpg"
            leftBtn="shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`