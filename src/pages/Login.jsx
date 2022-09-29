import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';




const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
  rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)),
url("https://c0.wallpaperflare.com/preview/18/875/686/sale-clothes-shopping-retail.jpg") center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`;

const Title = styled.h1`
font-size:26px;
font-weight:300;
`;

const Wrapper = styled.div`
width:25%;
padding:20px;
background-color:rgb(222, 221, 221);
${mobile({width:"75%"})}
`;

const Form = styled.form`
display:flex;
flex-direction:column;
`;

const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`;



const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color: rgb(56, 159, 249);
color:white;
cursor:pointer;
margin-bottom:10px

`;
const Link = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;


`;


const Login = () => {
  return (
    <Container>

    <Wrapper>
      <Title>sign in</Title>
      <Form>
        <Input placeholder="username"></Input>
        <Input placeholder="password"></Input>
        <Button>login</Button>
        <Link>not remember password </Link>
        <Link>create new account</Link>
      </Form>
    </Wrapper>

  </Container>
    
  )
}

export default Login