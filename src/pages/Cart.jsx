import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'


const Container = styled.div`
`;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:30px;
`;



const TopBotton = styled.button`
padding:15px;
font-weight:600;
cursor:pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props)=>
    props.type==="filled" ? "black" : "transparent"};
color: ${(props)=>props.type==="filled" && "white"};
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`;

const Bottom = styled.div`
display:flex;

justify-content:space-between;

`;
const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display:flex;
justify-content:space-between;

`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}

`;
const ProductSize = styled.span`

`;
const PriceDetail = styled.span`

flex:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;
const Image = styled.img`
width:200px;

`;


const Summary = styled.div`
flex:1;
`;
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;

`;



const ProductAmount = styled.div`
`;

const ProductPrice = styled.div`
font-size:30px;
font-weight:200;

`;



const Cart = () => {
  return (
  


    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your bag</Title>
            <Top>
                <TopBotton>Continue shoping</TopBotton>
                <TopTexts>
                    <TopText>Shopping bag(2)</TopText>
                    <TopText>Your wishlist(0)</TopText>
                </TopTexts>
                <TopBotton type='filled'>checkout now</TopBotton>

            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.logicalposition.com/img/case-studies/hey-dude_Graphic-1.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>RK SHOES</ProductName>
                                <ProductId><b>ID:</b>858582559965</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>size:</b>37</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>

                           <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>30 DT</ProductPrice>

                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>Summary</Summary>


            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
