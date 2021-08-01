import React from 'react'
import { Title,Item } from './style/header'

export default function Header({children,...resProps}){
    return <Item {...resProps}>{children}</Item>
}

Header.Title = function HeaderTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}