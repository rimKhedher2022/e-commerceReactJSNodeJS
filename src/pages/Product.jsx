import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsteller from '../components/Newsteller';
import { mobile } from '../responsive';

const Container = styled.div`

`;
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})}

`;
const ImageContainer = styled.div`
flex:1;
`;

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})}
`;


const Image = styled.img`
width:100%;
width:90vh;
object-fit:cover;
${mobile({height:"40vh"})}
`;
const Title = styled.h1`
font-weight:200;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight:100;
font-size:40px;

`;

const FilterContainer = styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({width:"100%"})}

`;

const FilterTitle = styled.span``;

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${(props)=>props.color};
margin:0px 5px;
cursor:pointer;
`;

const Filter = styled.div`
display:flex;

`;

const FilterSize = styled.select`
margin-left:10px;
padding:5px;

`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width:50%;
display:flex;
align-item : center;
justify-content:space-between;
${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
display:flex;
align-item : center;
font-weight:700;
`;

const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items : center;
justify-content:center;
margin:  0px 5px;
`;
const Button = styled.button`
padding:15px;
border-radius:5px;
border:1px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#D0E2DE;
}

`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
            <Image src="https://i.pinimg.com/originals/26/16/e3/2616e372eb181c0833e9814a3ac6067a.jpg"/>
            </ImageContainer>
            <InfoContainer>
                <Title>jjdj suit</Title>
                <Desc>desc</Desc>
                <Price>20 DT</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                       <FilterTitle>Size</FilterTitle>
                       <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XS</FilterSizeOption>
                       </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount> 1 </Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsteller/>
        <Footer/>



    </Container>
  )
}

export default Product