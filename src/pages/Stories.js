import React from 'react';
import { Tabs } from '../components/';
export default function Stories() {
  const tabSource = [
    {
      id: 1,
      title: 'Drafts',
      data: 'content1',
    },
    {
      id: 2,
      title: 'Published',
      data: 'content2',
    },
    {
      id: 3,
      title: 'Responses',
      data: 'content3',
    },
  ];
  return (
    <div
      className="content_part"
      style={{ margin: '20px 100px', left: '120px' }}
    >
      <div>
        <h1>Stories</h1>
        <div>
          <button type="button">New Story</button>
          <button type="button">Import a Story</button>
        </div>
      </div>

      <Tabs data={tabSource} />
    </div>
  );
}
