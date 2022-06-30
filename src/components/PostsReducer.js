import React,{useReducer, useEffect} from 'react';
import axios from 'axios';

//초기값( loading, data, error)
const initiailState = {
    loading:false,
    data:null,
    error:null
}

//리듀서 함수 작성
function reducer(state,action){
    switch(action.type){
        case 'LOADING':
            return{
                loading:true,
                data:null,
                error:null
            }
        case 'SUCCESS':
            return{
                loading:false,
                data:action.data,
                error:null
            }
        case 'ERROR':
            return{
                loading:false,
                data:null,
                error:action.error
            }
        default:
            return state;
    }
}


const PostReducer = (props) => {
    const fetchPosts = async()=>{
        dispatch({type:'LOADING'});
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({type:'SUCCESS', data:response.data})
        }
        catch(e){
            dispatch({type:'ERROR',error:e});
        }
    }
    useEffect(()=>{fetchPosts()},[]);

    const [state,dispatch] = useReducer(reducer,initiailState);
    const {loading,data,error} = state;
    if(loading) return <div>로딩중..🤔</div>
    if(error) return <div>에러 발생...😥</div>
    if(!data) return null

    return (
        <div>
            <table>
                <tr>
                    <th>NO</th>
                    <th>제목</th>
                    <th>내용</th>
                </tr>
                {data.map(post=>(
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default PostReducer;