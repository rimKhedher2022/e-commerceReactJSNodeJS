import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive';

const Container = styled.div`
`;
const Wrapper = styled.div`
padding:20px;
${mobile({padding:"10px"})}

`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
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
${mobile({display:"none"})}
`;


const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`;

const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
flex:3;
`;

const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
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

const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:60vh;
`;
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

`;

const ProductAmount = styled.div`
font-size:24px;
margin:5px; 
${mobile({margin:"5px 15px"})}
`;


const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({marginBottom:"20px"})}
`;

const SummaryTitle = styled.h1`
font-weight:200;
`;
const SummaryItem = styled.div`
margin: 30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};


`;
const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
`;
const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
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
                    <Hr/>
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
                <Summary>
                    <SummaryTitle>Order summary</SummaryTitle>

                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>80 dt</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>80 dt</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated shipping</SummaryItemText>
                        <SummaryItemPrice>80 dt</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>shipping discount</SummaryItemText>
                        <SummaryItemPrice>- 5.90 dt</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>total</SummaryItemText>
                        <SummaryItemPrice>80 dt</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryButton>Checkout now</SummaryButton>

                </Summary>


            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
