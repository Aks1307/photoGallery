import React,{useState,useEffect} from "react";
import Home from "./home";

import HeaderContainer from "../containers/header";
import SearchPage from "./searchPage";

function Index() {
    const [query,setQuery] = useState('');
   
  return (
    <div>
      <HeaderContainer setQuery={setQuery} />
      {query === '' ?  <Home /> : <SearchPage query={query}/> }
           
    </div>
  );
}

export default Index;
