import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {

    const [blog, setBlog] = useState({ title: '', content: '', imageUrl: '', author: '' })
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/blog/blog/${id}`)
            .then((res) => setBlog(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4000/blog/${id}`, blog)
            .then(() => navigate(`/show/${id}`))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div
                class="container"
            >
                <div
                    class="row justify-content-center align-items-center g-2"
                >
                    <div class="col">
                        <div class="card">

                            <div class="card-body">
                                <h4 class="card-title">Edit Blog</h4>
                                <form onSubmit={ handleSubmit }>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={ blog.title }
                                            onChange={ (e) => setBlog({ ...blog, title: e.target.value }) }
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
                                            value={ blog.content }
                                            onChange={ (e) => setBlog({ ...blog, content: e.target.value }) }
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
                                            value={ blog.imageUrl }
                                            onChange={ (e) => setBlog({ ...blog, imageUrl: e.target.value }) }
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
                                            value={ blog.author }
                                            onChange={ (e) => setBlog({ ...blog, author: e.target.value }) }
                                        />
                                        <label for="formId1">Author Name</label>
                                    </div>

                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Edit
                                    </button>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EditBlog
