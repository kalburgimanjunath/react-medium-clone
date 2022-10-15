import React from 'react';
import Avatar from '../components/Avatar';
import Sidebar from '../components/Sidebar';
import RightBar from '../components/RightBar';
import Social from '../components/Social';
export default function Home() {
  const post = {
    id: 1,
    title: 'How To Become A Content Writer With Zero Experience',
    user: {
      id: 1,
      name: 'manjunath kalburgi',
      date: '20-2-22',
      avatar_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    image_url: 'https://picsum.photos/200/300',
    description: 'description',
    category: ['Personal Development', 'money'],
  };
  return (
    <>
      <div className="content_part">
        <div
          style={{
            borderBottom: '1px solid #d6d6d6',
            padding: '20px 20px 20px 20px',
            marginBottom: 20,
            width: '100%',
          }}
        >
          <div style={{ margin: '20px 100px' }}>
            Published in Block Magnates
          </div>
        </div>
        <div style={{ margin: 20 }}>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                width: '30%',
                display: 'flex',
                margin: '20px 100px',

                // justifyContent: 'space-around',
              }}
            >
              <Avatar user={post.user} />
              {/* <div>Apr 13 · 4 min read · Listen</div> */}
            </div>

            <Social />
          </div>
          <div style={{ margin: '20px 100px' }}>
            <h1>{post.title}</h1>
            <div style={{ maxWidth: 900, position: 'relative' }}>
              <img src={post.image_url} style={{ width: '100%' }} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
            <div>
              {post.category &&
                post.category.map((item) => {
                  return <span>{item}, </span>;
                })}
            </div>
            <div>Post Footers</div>
          </div>
        </div>
      </div>
    </>
  );
}
