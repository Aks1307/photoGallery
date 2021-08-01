import React from 'react'
import {Container} from './style/photos'



export default function PhotosContainer({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}