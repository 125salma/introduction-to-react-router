import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    
    const handelShowDetail = ()=>{
            navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h2>Post of id: {id}</h2>
            <p>Title: {title}</p>

            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handelShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;