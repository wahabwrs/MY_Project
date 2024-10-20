import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "./App.css";
import Form from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  // Fetch posts data
  const getPostData = async () => {
    try {
      const res = await getPost();
      setData(res.data);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Handle post deletion
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        // Filter out the deleted post from the data state
        const newUpdatedPosts = data.filter((curPost) => curPost.id !== id); // Fixed logic
        setData(newUpdatedPosts);
        console.log(`Post with id ${id} deleted successfully.`);
      }
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  // Handle post update
  const handleUpdatePost = (curElem) => {
    setUpdateDataApi(curElem); // Corrected the function to set update data
  };

  return (
    <>
      <section className="section-post">
        <Form 
          data={data} 
          setData={setData} 
          updateDataApi={updateDataApi} 
          setUpdateDataApi={setUpdateDataApi} 
        />
      </section>

      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button onClick={() => handleUpdatePost(curElem)}>Edit</button> {/* Fixed the button click syntax */}
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};

export default Posts; // Added default export
