import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {BASE_URL} from "../App";

function PostDetails(){
    const{id} = useParams();
    const [isLoading, setLoading] = useState(false);
    const [post, setSinglePost] = useState(null);

           async function fetchSinglePost() {
                 setLoading(true);
                 const response = await fetch(`${BASE_URL}/posts/${id}`);
                 const data = await response.json();
                 setSinglePost(data);
                 setLoading(false);
        }

        useEffect(() => {
            if (id) {
                fetchSinglePost();
            }
        }, [id]);

        return (
            <div
              style={{
                maxWidth: "600px",
                margin: "20px auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <h2>{post?.title}</h2>
        
              <p>
                <strong>User ID:</strong> {post?.userId}
              </p>
        
              <p>
                <strong>Post ID:</strong> {post?.id}
              </p>
        
              <p style={{ whiteSpace: "pre-line" }}>{post?.body}</p>
            </div>
          );
        };
   

   


export default PostDetails