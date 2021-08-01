import styled from "styled-components";

export const Item = styled.div`
display : flex;
align-items : center;
justify-content : space-evenly;
@media(max-width:1000px){
    flex-direction:column;
}
`
export const Title = styled.h1`
color:#fff;
font-size : 3rem;
`