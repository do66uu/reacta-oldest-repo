import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
    })

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form style={{marginTop:'15px'}}>
            <MyInput
                type="text"
                placeholder={'+375(xx)xxx-xx-xx'}
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
            />
            <MyInput
                type="text"
                placeholder={'example@gmail.com'}
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
            />
            {post.title && post.body
                ?
                <MyButton onClick={addPost}>Создать пост</MyButton>
                :
                <MyButton disabled>Хер тебе, заполни поля</MyButton>}
        </form>
    );
};

export default PostForm;
