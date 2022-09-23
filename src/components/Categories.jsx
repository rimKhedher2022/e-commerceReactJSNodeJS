
import React from 'react'
import styled from 'styled-components'
import { categories } from '../data';
import CategotyItem from './CategotyItem';

const Container = styled.div`
display : flex;
// bech ykounou horizontal : display:flex
padding:20px;
justify-content:space-between;
`;
const Categories = () => {
  return (
    <Container>
           {categories.map(item=>(
           <CategotyItem item={item}/>

           ))}
    </Container>
  
  )
}

export default Categories