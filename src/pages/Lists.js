import React from 'react';
import { Tabs } from '../components/';
export default function Lists() {
  const tabSource = [
    {
      id: 1,
      title: 'Saved',
      data: 'content1',
    },
    {
      id: 2,
      title: 'Highlights',
      data: 'content2',
    },
  ];
  return (
    <div
      className="content_part"
      style={{ margin: '20px 100px', left: '120px' }}
    >
      <div>
        <h1>Lists</h1>
        <div>
          <button type="button">New List</button>
        </div>
      </div>
      <Tabs data={tabSource} />
    </div>
  );
}
