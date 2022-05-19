import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
    
const Update = (props) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    const { update, setUpdate } = props;
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
    }, [id]);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/update/${id}`, {
            firstName,
            lastName
        })
        .then(res => {
            console.log(res)
            setUpdate(!update)
            navigate('/author')
        })
        .catch(err => {
            console.error(err)
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
                <p>Edit this author:</p>
            </div>
            <div>
                <form onSubmit={updateAuthor}>
                    {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                    <div style={{marginTop:10}}>
                        <label>First Name</label>
                        <input onChange={(e) => { setFirstName(e.target.value) }} type="text" name="firstname" value={firstName} />
                    </div>
                    <div style={{marginTop:10, marginBottom:10}}>
                        <label>Last Name</label>
                        <input onChange={(e) => { setLastName(e.target.value) }} type="text" name="lastname" value={lastName} />
                    </div>
                    <input type="submit" /> <button onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}
    
export default Update

