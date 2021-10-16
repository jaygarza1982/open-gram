import './App.css';
import { Paper } from '@mui/material';
import PostHeader from './components/post/PostHeader';
import PostCaption from './components/post/PostCaption';
import PostImage from './components/post/PostImage';
import Post from './components/post/Post';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Paper>
          <Post
            username={'Johnny.5'}
            profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
            imgURL={'https://www.w3schools.com/tags/img_girl.jpg'}
            body={'Test text in body!!'}
          />
        </Paper>
      </div>
    </div>
  );
}

export default App;
