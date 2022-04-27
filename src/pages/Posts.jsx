import React, {useEffect, useState} from "react";
import {countOfBtn, countOfPages} from "../utils/CountOfPages";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyLoader from "../components/UI/loader/MyLoader";
import PostList from "../components/PostList";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visible, setVisible] = useState(false)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const pages = countOfBtn(totalPages)

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(countOfPages(totalCount, limit))
    })

    const searchAndFilter = usePosts(posts, filter.sort, filter.query)

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost])
        setVisible(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    useEffect(() => {
        fetchPosts()
    }, [page])

    return (
        <div className="App">
            <MyButton style={{marginTop: 15}} onClick={() => setVisible(true)}>Добавить пользователя</MyButton>
            <hr style={{margin: '15px 0'}}/>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm create={createNewPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <hr style={{margin: '15px 0'}}/>
            {postError &&
                <h1>{postError}</h1>
            }
            {isPostLoading
                ?
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><MyLoader/></div>
                :
                <PostList remove={removePost} posts={searchAndFilter} title={'Список пользователей'}/>
            }
            <div className="page__wrapper">
                {pages.map(p =>
                    <MyButton onClick={() => setPage(p)} className={page === p ? 'page page__current' : 'page'} key={p}>{p}</MyButton>
                )}
            </div>
        </div>
    );
};

export default Posts;
