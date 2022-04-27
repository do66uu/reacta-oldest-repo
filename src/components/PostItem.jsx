import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from "react-router-dom";

const PostItem = (props) => {
    const router = useHistory();
    console.log(router)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div style={{marginTop: '5px'}}><i>{props.post.body}</i></div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
