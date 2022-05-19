import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import Authorlist from '../components/AuthorList'
import Update from '../components/Update';
import {Routes, Route} from 'react-router-dom';


export default () => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect (() => {
        axios.get("http://localhost:8000/api/author")
        .then(res => {
            console.log(res.data);
            setAllAuthors(res.data)
        })
        .catch(err => {
            console.log("XXXX", err);
        })
    }, [update])

    const removeFromDom = authorId => {
        setAllAuthors(allAuthors.filter((author) => author._id !== authorId));
    }

    return (
        <div>
            <Routes>
                <Route path='/author' element={<Authorlist allAuthors = {allAuthors} removeFromDom={removeFromDom}/>} />
                <Route path='/author/new' element={<Form setAllAuthors = {setAllAuthors} allAuthors = {allAuthors}/>} />
                <Route path='/author/update/:id' element={<Update setUpdate = {setUpdate} update = {update}/>} />
            </Routes>
        </div>
    )
}