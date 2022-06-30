import axios from 'axios';
import React from 'react';
import useAsync from './useAsync';

async function getUser(id){
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(response);
    return response.data;
}

const User = ({id}) => {
    const [state] = useAsync(()=>getUser(id),[id]);
    const {loading, data, error} = state;
    console.log(data);
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null;
    return (
        <div>
            <h2>{data.username}</h2>
            <p>
                Email: {data.email}
            </p>
        </div>
    );
};

export default User;