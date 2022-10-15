import React from 'react';
import { Tabs } from '../components/';
export default function Notification() {
  const tabSource = [
    {
      id: 1,
      title: 'All',
      data: 'content1',
    },
    {
      id: 2,
      title: 'Response',
      data: 'content2',
    },
  ];
  return (
    <div
      className="content_part"
      style={{ margin: '20px 100px', left: '120px' }}
    >
      <h1>Notification</h1>
      <Tabs data={tabSource} />
    </div>
  );
}
