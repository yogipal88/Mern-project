import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {

    const [blog, setBlog] = useState({title:'',content:'',imageUrl:'',author:''})
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/blog/add',blog)
        .then(()=>navigate('/'))
        .catch((err)=>console.log(err))
    }

    return (
        <>
            <div
                class="container"
            >
                <div
                    class="row justify-content-center align-items-center g-2"
                >
                    <div class="col">
                        <div class="card">

                            <div class="card-body">
                                <h4 class="card-title">Add Blog</h4>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={(e)=>setBlog({...blog,title:e.target.value})}
                                        />
                                        <label for="formId1">Title</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={(e)=>setBlog({...blog,content:e.target.value})}
                                        />
                                        <label for="formId1">Content</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={(e)=>setBlog({...blog,imageUrl:e.target.value})}
                                        />
                                        <label for="formId1">Image Url</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={(e)=>setBlog({...blog,author:e.target.value})}
                                        />
                                        <label for="formId1">Author Name</label>
                                    </div>
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Add Blog
                                    </button>
                                    
                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default AddBlog
