import React from "react";
import { useParams } from "react-router-dom";
import { initialPosts  } from "../data/posts";
const ReadMore = () => {
  const { id } = useParams();
  console.log(parseInt(id));
  const post = initialPosts.find((i) => i.id === parseInt(id));

  if (!post) {
    return <p>Post Not Founded!</p>;
  }
  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 className="text-2xl">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        style={{ width: "100%", borderRadius: "1rem" }}
      />
      <p className="text-xl">
        {post.location} • {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-xl">{post.shortDescription}</p>
    </div>
  );
};
export default ReadMore;
