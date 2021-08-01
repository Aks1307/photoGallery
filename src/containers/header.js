import React from 'react'
import Header from '../components/header'
import Search from '../components/search'

function HeaderContainer({setQuery}) {
    return (
        <div>
            <Header>
                <Header.Title>Photo Search</Header.Title>
                <Search>
                    <Search.InputBox setQuery={setQuery}/>
                </Search>
            </Header>
        </div>
    )
}

export default HeaderContainer
