import Header from "../components/jsx/Header"
import NewsList from "../components/jsx/NewsList";

import {useContext, useState} from "react";
import { NewsStateContext } from "../App";

function Home (){

    const newsData = useContext(NewsStateContext);

    return (
        <>
        <Header/>
        <NewsList newsData={newsData}/>
        </>
    );
}

export default Home;