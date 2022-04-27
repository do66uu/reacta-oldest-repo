import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import MyLoader from "../components/UI/loader/MyLoader";

const PostItem = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        console.log(response.data)
        setPost(response.data);
    })


    useEffect(() => {
        fetchPostById()
    }, [])

    return (
        <div>
            <h1>Здесь будет пост id={params.id}</h1>x
            {isLoading
                ? <MyLoader/>
                : <div>
                    <div>{post.id} {post.title}</div>
                    <div>{post.body}</div>
                </div>
            }

        </div>
    );
};

export default PostItem;
