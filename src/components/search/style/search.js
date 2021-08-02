import styled from "styled-components";


export const Input = styled.input`
padding:10px;
width:50%;
border:none;
margin-right : 2px;
@media(max-width:1000px){
    width : 100%;
}
` 
export const Item = styled.div`
width:50%;
position:relative;
`

export const List = styled.div`
padding:2px;
color:black;
`

export const Button = styled.button`
border: none;
padding : ${(props) => props.padding ? props.padding : '14px'};
background :  ${(props) => props.background ? props.background : '#fff'}; 
cursor:pointer;
margin : 3px;
color : white;
`

export const SearchHistoryContainer = styled.div`
background:#fff;
width:50%;
padding:10px;
position:absolute;
top:40px;
@media(max-width:1000px){
    width : 100%;
}
`

export const InputDiv =  styled.div`
display : flex;
@media(max-width:1000px){
    flex-direction:column;
}
`