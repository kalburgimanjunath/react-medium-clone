import React from 'react';
const user = {
  id: 1,
  name: 'manjunath kalburgi',
  date: '20-2-22',
  avatar_url:
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
},
export default function Avatar({ url, user={
  id: 1,
  name: 'manjunath kalburgi',
  date: '20-2-22',
  avatar_url:
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
}, size = 50 }) {
  return (
    <div style={{ display: 'flex' }}>
      <img
        src={user.avatar_url}
        width={size}
        height={size}
        style={{
          borderRadius: 25,
        }}
      />
      <div style={{ padding: `0 0 0px 10px` }}>{user.name}</div>
    </div>
  );
}
