import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

// EXPORT
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 

    // function to submit and create a product
    const createAuthor = (e) => {
        e.preventDefault();

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
            navigate('/author', {replace:true})
        })
        .catch(err => {
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

        
    const handleCancel = () => {
        navigate('/author', {replace:true})
    }
        
    return (
        <div className="container">
            <div className="nav-link">
                <p><Link to={"/author"}>Home</Link></p>
                <p>Add a new author:</p>
            </div>
            <div>
                <form onSubmit={createAuthor}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div style={{marginTop:10}}>
                        <label>First Name: </label>
                        <input onChange={(e) =>setFirstName(e.target.value)} value={firstName}/> <br />
                    </div>
                    <div style={{marginTop:10, marginBottom:10}}>
                    <label>Last Name: </label>
                        <input onChange={(e) =>setLastName(e.target.value)} value={lastName}/><br />
                    </div>
                    <button>Submit</button> <button onClick={handleCancel}>Cancel</button>
                </form>

            </div>
        </div>
    )
}

export default Form

