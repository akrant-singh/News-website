import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import News from './News'
export default class App extends Component{
    constructor(){
        super()
        this.state = {
            language:"en",
            search:"None"
        }
    }
    changeLanguage = (lang)=>{
        this.setState({language:lang})
    }
    changeSearch = (srch)=>{
        if(srch=="")
        this.setState({search:"None"})
        else
        this.setState({search:srch})
    }
    render() {
        return (
            <>
               <BrowserRouter>
                   <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
                   <Routes>
                       <Route path='/' element={<News search={this.state.search} language={this.state.language} category = "All"/>}></Route>
                       <Route path='/Politics' element={<News search={this.state.search} language={this.state.language} category = "Politics"/>}></Route>
                       <Route path='/Crime' element={<News search={this.state.search} language={this.state.language} category = "Crime"/>}></Route>
                       <Route path='/Technology' element={<News search={this.state.search} language={this.state.language} category = "Technology"/>}></Route>
                       <Route path='/Science' element={<News search={this.state.search} language={this.state.language} category = "Science"/>}></Route>
                       <Route path='/Education' element={<News search={this.state.search} language={this.state.language} category = "Education"/>}></Route>
                       <Route path='/Sports' element={<News search={this.state.search} language={this.state.language} category = "Sports"/>}></Route>
                       <Route path='/IPL' element={<News search={this.state.search} language={this.state.language} category = "IPL"/>}></Route>
                       <Route path='/Covid19' element={<News search={this.state.search} language={this.state.language} category = "Covid19"/>}></Route>
                       <Route path='/Jokes' element={<News search={this.state.search} language={this.state.language} category = "Jokes"/>}></Route>
                       <Route path='/Entertainment' element={<News search={this.state.search} language={this.state.language} category = "Entertainment"/>}></Route>
                   </Routes>
               </BrowserRouter>
            </>
        )
    }
}
