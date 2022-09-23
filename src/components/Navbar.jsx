import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from "@material-ui/icons"
import { Badge } from '@material-ui/core';

const Container = styled.div`
  background-color: white;
  font-size: 32px;
  color: black;
`;



const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;

`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Language=styled.span`
font-size:14px;
cursor:pointer;
`;

const SearchContainer=styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px; 
// bech tib3id 3al lisar
padding:10px

`
;

const Input = styled.input`

`;
const Center=styled.div`
flex:1;
text-align:center;
`;


const Logo=styled.h1`
font-weight : bold;
`;


const Right=styled.div`
display:flex;
flex:1;
align-items:center;
justify-content:flex-end;

`;

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontsize:16}}/>
                    
                </SearchContainer>
            </Left>
            <Center><Logo>SOUL..</Logo></Center>
            <Right>

                <MenuItem>Register</MenuItem>
                <MenuItem>Sign in</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined color="action" />
                </Badge>
            </MenuItem>
               
            </Right>
        
        </Wrapper>
        
    </Container>
    
  )
}

export default Navbar