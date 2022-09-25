import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

display:flex;
`;

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
margin:30px 0px;
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:15px;
`;

const Center = styled.div`
flex:1;
padding : 20px; 
`;

const Title = styled.h3`
margin-bottom:30px;

`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;

display:flex;

flex-wrap:wrap;
`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;


const Right = styled.div`
flex:1;
padding:20px;
`;


const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;
const Payment = styled.img`
width:50%;

`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>E-MAG.</Logo>
            <Desc>desc</Desc>
            <SocialContainer>
                <SocialIcon color="0942B2">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E1136C">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="1599F2">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>

      

        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>cart</ListItem>
                <ListItem>Man fashion</ListItem>
                <ListItem>my account</ListItem>
                <ListItem>woman fashion</ListItem>
                <ListItem>woman fashion</ListItem>
                <ListItem>woman fashion</ListItem>
                <ListItem>woman fashion</ListItem>
                <ListItem>woman fashion</ListItem>
                <ListItem>woman fashion</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> sousse /cité nour - nefidha
            </ContactItem>

            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> 5252-965-555
            </ContactItem>

            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> contact@idi.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

        </Right>
    </Container>
  )
}

export default Footer
