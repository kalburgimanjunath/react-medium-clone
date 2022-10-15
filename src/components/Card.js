import React from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
export default function Card({ post, type = 'grid' }) {
  return (
    <>
      {type == 'grid' ? (
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
            <Link to={`post:${post.id}`}>{post.title}</Link>
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
      ) : (
        <div
          style={{
            flexDirection: 'row',
            // columnCount: 2,
            marginBottom: 20,
            borderBottom: `1px solid #d7d7d7`,
          }}
        >
          <div style={{ display: 'flex' }}>
            <Avatar user={post.user} size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>
              <Link to={`post:${post.id}`}>{post.title}</Link>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: post.description }}></div> */}
            {/* <div>
              {post.category &&
                post.category.map((item) => {
                  return <span>{item}, </span>;
                })}
            </div> */}
          </div>
          {/* <div
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
          </div> */}
        </div>
      )}
    </>
  );
}
