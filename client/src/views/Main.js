import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import Authorlist from '../components/AuthorList'



export default () => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/author")
        .then(res => {
            console.log(res.data);
            setAllAuthors(res.data)
        })
        .catch(err => {
            console.log("XXXX", err);
        })
    }, [])

    const removeFromDom = authorId => {
        setAllAuthors(setAllAuthors.filter((author) => author._id !== authorId));
    }

    return (
        <div>
            <Form setAllAuthors = {setAllAuthors} allAuthors = {allAuthors}/>
            <Authorlist allAuthors = {allAuthors} removeFromDom={removeFromDom}/>
        </div>
    )
}