import './App.css';
import { Paper } from '@mui/material';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Post
            username={'Johnny.5'}
            profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
            imgURL={'https://www.w3schools.com/tags/img_girl.jpg'}
            body={'Test text in body!!'}
            likedBy={['user1', 'user2', 'user3']}
            comments={['A comment']}
            date={new Date()}
          />
          <Post
            username={'Johnny.5'}
            profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
            imgURL={'https://www.w3schools.com/tags/img_girl.jpg'}
            body={'Second post'}
            likedBy={[]}
            comments={[]}
          />
      </div>
    </div>
  );
}

export default App;
