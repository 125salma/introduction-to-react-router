import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const{id,title,boby} =post;
    
    
    const navigate = useNavigate();

    const handleGoBack=()=>{
         navigate(-1);
    }

    const {postId} = useParams();
    console.log(postId);

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{boby}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;