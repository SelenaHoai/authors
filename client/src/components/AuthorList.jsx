import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'

const Authorlist = (props) => {
    // console.log(props)
    const { removeFromDom } = props;

    const deleteAuthor = (AuthorId) => {
        axios.delete(`http://localhost:8000/api/author/delete/${AuthorId}`)
        .then(res => {
            removeFromDom(AuthorId);
        })
        .catch(err => console.error(err));
    }


    return (
        <div className="container">
            <div className="nav-link">
                <p>Add an author</p>
                <p>We have quotes by:</p>
            </div>
            <table className="author-table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>{props.allAuthors.map((author) => {
                    return (
                    <tr key={author._id}>
                        <td><Link to={`/author/${author._id}`}>{author.firstName} {author.lastName}</Link></td>
                        <td><button onClick={(e) => {deleteAuthor(author._id)}}>Delete</button></td>
                    </tr>
                    )
                })
            }
                </tbody>
            </table>



            {/* {props.allAuthors.map((author) => {
                return ( 
                <div key={author._id}>

                    <Link to={`/author/${author._id}`}>{author.firstName} {author.lastName}</Link>
                    <Link to={`/author/update/${author._id}`}>Edit</Link> &nbsp;
                    <button onClick={(e) => {deleteAuthor(author._id)}}>Delete</button>

                </div>
                )
            })
            } */}
        
        </div>
    )
}


export default Authorlist