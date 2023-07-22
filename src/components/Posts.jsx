import React from "react";

export default function Posts({ currentPosts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul className="list-group">
        {currentPosts.map((post) => {
          return (
            <>
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
