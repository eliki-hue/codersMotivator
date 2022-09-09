import React,{useState} from 'react';
// import { useDispatch } from 'react-redux';
// import { HashLink as Link } from 'react-router-hash-link';
// import {login} from '../actions/auth'
// import './loginPage.css'
// import {useNavigate} from "react-router-dom"


const initialState = {
    category : ''

}

function Category(){

    const [category, setCategory] = useState(initialState)

    return(
        <div className="back">
            <div className="div-center">
                <div className="content">
                    <h3 className='text-center'>Add Category</h3>
                    <hr />
                    <form onSubmit={""} type="post">
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input className="form-control" type="text" name="category" onChange={(e)=>setCategory({ [e.target.name]:e.target.value})} required/>
                        </div>

                        <button type="submit" className="btn btn-primary">Add</button>
                        <hr />

                    </form>
                </div>
            </div>
        </div>

    );
 };
export default Category;