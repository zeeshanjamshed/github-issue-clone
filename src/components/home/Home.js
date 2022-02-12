import React , {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import TopBar from "../topBar/TopBar";
import PaginationComponent from "../pagination/Pagination";
import ListComponent from "../list/List";
import allActions from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.postReducer?.posts);
  console.log(posts, "data");

  useEffect(() => {
    dispatch(allActions.fetchPosts());
  }, []);

  return (
    <Container>
      <TopBar />
      <ListComponent />
      <PaginationComponent />
      <div>
     {posts && posts.map((data) => {
       return <div>{data.name}</div>;
     })}
   </div> 
    </Container>
    
  );
};

export default Home;
