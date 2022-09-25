
import React from 'react'

import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsteller from '../components/Newsteller';
import Products from '../components/Products';


const Container = styled.div`


`;
const Title = styled.h1`


`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;

`;


const Filter = styled.div`
margin  :20px;
align-items:center;

`;

const FilterText = styled.span`
font-size :20px;
font-weight :600;
margin-right:20px;

`;
const Select = styled.select`

padding:10px;   
margin-right:20px;

`;
const Option = styled.option`


`;





const ProducList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>color</Option>
                    <Option>White</Option>
                    <Option>White</Option>
                    <Option>green</Option>
                    <Option>Whgdite</Option>
                </Select>
                <Select>
                    <Option disabled selected>size</Option>
                    <Option>s</Option>
                    <Option>m</Option>
                    <Option>l</Option>
                    <Option>xl</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option selected>Newset</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc) </Option>
                 
                </Select>
            </Filter>
            

           

        </FilterContainer>
        <Products/>
        <Newsteller/>
        <Footer/>
    </Container>
  )
}

export default ProducList