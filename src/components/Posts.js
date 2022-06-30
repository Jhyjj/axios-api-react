import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Posts = (props) => {
    //상태관리
        //1. 요청의 결과
        //2. 로딩
        //3. 에러
        const [posts, setPosts] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const fetchPosts = async ()=>{
            //성공하면 try, 실패하면 catch
            try{
                setError(null);
                setPosts(null);
                setLoading(true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
                console.log(response);
            }
            catch(e){
                setError(e);
            }
            setLoading(false);
        }
        useEffect(()=>
        {fetchPosts()},[])
        if(loading) return <div>로딩중입니다. 조금만 기다려주세요</div>;
        if(error) return <div>에러가 발생했습니다...😭</div>;
        if(!posts) return null;
    return (
        <div>
            <h1>POST</h1>
            <table>
                <tr>
                    <th>NO</th>
                    <th>TITLE</th>
                    <th>DESC</th>
                </tr>
                {posts.map(post=>(
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
            </table>
            <button onClick={fetchPosts}>RELOAD</button>
        </div>
    );
};

export default Posts;