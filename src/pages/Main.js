import React from 'react';
import { Avatar, Card } from '../components';
import { Link } from 'react-router-dom';
export default function Main({ posts }) {
  const CardComponent = ({ post }) => {
    return (
      <>
        <div
          style={{
            flexDirection: 'row',
            columnCount: 2,
            marginBottom: 20,
            borderBottom: `1px solid #d7d7d7`,
          }}
        >
          <div style={{ display: 'flex' }}>
            <Avatar user={post.user} size={30} />
          </div>
          <div>
            <h4>
              <Link to={`post:${post.id}`}>{post.title}</Link>
            </h4>
            <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
            <div>
              {post.category &&
                post.category.map((item) => {
                  return <span>{item}, </span>;
                })}
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <img
              src={post.image_url}
              style={{ width: 200, height: 200, padding: 20 }}
            />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div style={{ padding: 20, backgroundColor: '#fff' }}>
        {posts &&
          posts.length > 0 &&
          posts.map((item) => {
            return <CardComponent post={item} />;
          })}
      </div>
      <div style={{ backgroundColor: 'gray', color: '#fff' }}>
        <div style={{ padding: 20 }}>
          <h3>More from Manjunath Kalburgi</h3>
          {posts &&
            posts.length > 0 &&
            posts.map((item) => {
              return <CardComponent post={item} />;
            })}
        </div>
      </div>
    </>
  );
}
