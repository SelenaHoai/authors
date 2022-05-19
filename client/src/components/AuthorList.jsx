import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'


const Authorlist = (props) => {
    const { removeFromDom } = props;

    const deleteAuthor = (AuthorId) => {
        axios.delete(`http://localhost:8000/api/author/delete/${AuthorId}`)
        .then(res => {
            removeFromDom(AuthorId);
        })
        .catch(err => console.error(err));
    }


    return (
        <div style={{marginLeft:80, marginRight:80, marginTop:20}}>
            <div className="">
                <p><Link to={"/author/new"}>Add an author</Link></p>
                <p>We have quotes by:</p>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>{props.allAuthors.map((author) => {
                    return (
                    <tr key={author._id}>
                        <td>{author.firstName} {author.lastName}</td>
                        <td className="d-flex justify-content-evenly">
                            <button><Link to={`/author/update/${author._id}`} className="text-decoration-none">Edit</Link></button> <button onClick={(e) => {deleteAuthor(author._id)}} style={{color:"red"}}>Delete</button>
                        </td>
                    </tr>
                    )
                })
            }
                </tbody>
            </table>        
        </div>
    )
}


export default Authorlist