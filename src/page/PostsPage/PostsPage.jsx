import Post from "../../components/Post/PostCont";
import Container from 'react-bootstrap/Container'
import Title from "../../components/Title/Title";
import data from "../../data";
const PostsPage = () => {
  return (
    <div>
      <Container >
        <Title title={"posts"}/>
        <div>
      {data.map((e, index) => (
        <Post key={index} posTBody={e.postBody} PostImg={e.PostImg}/>
      ))}
      
      </div>
      </Container>
    </div>
  );
};

export default PostsPage;
