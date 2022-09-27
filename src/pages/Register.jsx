
import React from 'react'
import styled from 'styled-components'

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
width:40%;
padding:20px;
background-color:rgb(222, 221, 221);
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 10px 0px;
padding:10px;
`;

const Agreement = styled.p`
font-size:12px;
margin:20px 0px;

`;

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color: rgb(56, 159, 249);
color:white;
cursor:pointer;

`;

const Register = () => {
  return (
    <Container>

      <Wrapper>
        <Title>Create an account </Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm"></Input>
          <Agreement>
            Privacy policy , create now you own account . and try the products 
          </Agreement>
           
          <Button>Create</Button>
        </Form>
      </Wrapper>

    </Container>
  )
}

export default Register