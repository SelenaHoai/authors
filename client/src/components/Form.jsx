import React, {useEffect, useState} from 'react';
import axios from 'axios';

// EXPORT
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // function to submit and create a product
    const createAuthor = (e) => {
        e.preventDefault()

        //create the obj
        const newAuthor = {
            firstName,     
            lastName
        }
        console.log(newAuthor);

        // go to the server and pass the obj using post
        // match the post route with the SERVER ROUTE
        axios.post("http://localhost:8000/api/author/new", newAuthor)
        .then(res => {
            console.log("SUCCESS", res.data)
            props.setAllAuthors([...props.allAuthors,res.data]);
        })
        .catch(err => {
            console.log("ERROR", err);
        })
    }


    return (
        <div>
            <hr />
            <div>
                <form onSubmit={createAuthor}>
                    <div>
                        <label>First Name: </label>
                        <input onChange={(e) =>setFirstName(e.target.value)} value={firstName}/> <br />
                    </div>
                    <div>
                    <label>Last Name: </label>
                        <input onChange={(e) =>setLastName(e.target.value)} value={lastName}/><br />
                    </div>
                    <button>Create Author</button>
                </form>
            </div>
            <hr />
        </div>
    )
}

export default Form

