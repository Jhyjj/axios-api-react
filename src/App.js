import './App.css';
import Users from './components/Users';
import UsersReducer from './components/UsersReducer';
import Posts from './components/Posts';
import PostReducer from './components/PostsReducer';
import UsersCustomHook from './components/UsersCustomHook';

function App() {
  return (
    <div className="App">
        {/* <Users/> */}
        {/* <UsersReducer/> */}
        {/* <Posts/> */}
        {/* <PostReducer/> */}
        <UsersCustomHook/>
    </div>
  );
}

export default App;
