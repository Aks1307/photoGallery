import styled from "styled-components";

export const Item = styled.div`
  padding: 10px;
  background: aqua;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
  @media(max-width:600px){
      height :300px;
      width : 300px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: none;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding : 50px;
`;

export const Button = styled.button`
border : none;
padding:5px;
position:absolute;
top : 0px;
right : 0px;
cursor : pointer;
background : red;
color : white;
`