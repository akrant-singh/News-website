import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import News from './News'
export default function App() {
    var [language, setlanguage] = useState("en")
    var [search, setsearch] = useState("None")
    var changeLanguage = (lang) => {
        setlanguage(lang)
    }
    var changeSearch = (srch) => {
        if (srch == "")
            setsearch("None")
        else
            setsearch(srch)
    }

    return (
        <>
            <BrowserRouter>
                <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
                <Routes>
                    <Route path='/' element={<News search={search} language={language} category="All" />}></Route>
                    <Route path='/Politics' element={<News search={search} language={language} category="Politics" />}></Route>
                    <Route path='/Crime' element={<News search={search} language={language} category="Crime" />}></Route>
                    <Route path='/Technology' element={<News search={search} language={language} category="Technology" />}></Route>
                    <Route path='/Science' element={<News search={search} language={language} category="Science" />}></Route>
                    <Route path='/Education' element={<News search={search} language={language} category="Education" />}></Route>
                    <Route path='/Sports' element={<News search={search} language={language} category="Sports" />}></Route>
                    <Route path='/IPL' element={<News search={search} language={language} category="IPL" />}></Route>
                    <Route path='/Covid19' element={<News search={search} language={language} category="Covid19" />}></Route>
                    <Route path='/Jokes' element={<News search={search} language={language} category="Jokes" />}></Route>
                    <Route path='/Entertainment' element={<News search={search} language={language} category="Entertainment" />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}
