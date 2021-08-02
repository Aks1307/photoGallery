import React,{useState} from 'react'
import {Input,Item,List,Button,SearchHistoryContainer,InputDiv} from './style/search'



export default function Search({children,...restProps}){
    return <Item {...restProps}>{children}</Item>
}

function saveToLoalStorage(data){
    let searchList = [];
    
    searchList = JSON.parse(localStorage.getItem('photoSeach')) || [];
    //Show and store only last 5 Search Query 
    if(searchList && searchList.length > 4){
        searchList.pop();
        searchList.unshift(data);
    }else if(data){
        searchList.unshift(data);
    }
   
    localStorage.setItem('photoSeach', JSON.stringify(searchList));
}

Search.History = function SeachHistory(){

    const searchList = JSON.parse(localStorage.getItem('photoSeach')) || null;
    return searchList ? (<SearchHistoryContainer>
            {searchList.map((item,idx) => {
                return <List key={idx}>{item}</List>
            })
        }
    </SearchHistoryContainer>) : null;

}


Search.InputBox = function SearchInputBox({children,setQuery,...restProps}){

    const [value,setValue] = useState();
    const [isFocus,setFocus] = useState(false);
    function handleChange(e){
        setValue(e.target.value)
        setQuery(e.target.value)
    }

    return <InputDiv>
        <Input  placeholder="Search Image" onBlur={e=> setFocus(false)} onFocus={e => setFocus(true)} value={value} onChange={e => handleChange(e)} {...restProps}>{children}</Input>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Button  background = "green" onClick={e => saveToLoalStorage(value)}>Search</Button>
        <Button  onClick={() =>  localStorage.removeItem("photoSeach")} padding = "14px" background="red">Clear Search History</Button>
        </div>
        {isFocus ? <Search.History/> : null}
        </InputDiv>
}

