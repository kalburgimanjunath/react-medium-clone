import React from 'react';
import Widget from './Widget';
import Avatar from './Avatar';
export default function RightBar({ posts, category }) {
  const users = [
    {
      id: 1,
      name: 'Manjunath kalburgi',
      date: '20-2-22',
      avatar_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 2,
      name: 'Deepa kalburgi',
      date: '20-2-22',
      avatar_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 3,
      name: 'Sona kalburgi',
      date: '20-2-22',
      avatar_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
  ];
  return (
    <div style={{ margin: 20 }}>
      <button type="button" title="Get Unlimited Access">
        Get Unlimited Access
      </button>
      <div className="search_bar">
        <input type="search" placeholder="Search" style={{ width: '100%' }} />
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <Avatar user={users[0]} size={30} />
        </div>
        <div>199 Followers</div>
        <div>
          About:Forex Trader | Experienced Non-Fiction eBook Ghostwriter |
          Blogger | Personal Development Enthusiast
        </div>
        <div>
          <button type="button">Follow</button>
          <button type="button">Subscribe</button>
        </div>
      </div>
      <Widget title={'Staff Picks'} posts={posts} type="post" />
      <Widget title={'More from Medium'} posts={posts} type="post" />
      <Widget title={'Recently saved'} posts={posts} type="post" />
      <Widget
        title={'Recommended topics'}
        category={category}
        type="category"
      />
      <Widget title={'Who to follow'} type="user" users={users} />
    </div>
  );
}
