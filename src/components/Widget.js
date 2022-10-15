import React from 'react';
import Card from './Card';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
export default function Widget({ title, type, posts, users, category }) {
  console.log(category);
  return (
    <>
      {type === 'post' ? (
        <>
          <div>
            <div style={{ fontWeight: 'bold', padding: `20px 20px 20px 0px` }}>
              {title}
            </div>
          </div>
          <>
            {posts.map((post) => {
              return <Card post={post} type="list" />;
            })}
          </>
        </>
      ) : type === 'user' ? (
        <div
          style={{
            flexDirection: 'column',
            display: 'flex',
            paddingBottom: 20,
          }}
        >
          {users &&
            users.map((user) => {
              return (
                <div>
                  <Avatar user={user} />
                  <button type="button">Follow</button>
                </div>
              );
            })}
        </div>
      ) : type == 'category' ? (
        <div>
          <div>Category</div>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', padding: `10px 0px` }}
          >
            {category &&
              category.map((item) => {
                return (
                  <button type="button" style={{ margin: `10px 5px` }}>
                    {item}
                  </button>
                );
              })}
          </div>
        </div>
      ) : (
        <>
          <div>{title}</div>
        </>
      )}
    </>
  );
}
