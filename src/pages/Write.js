import React from 'react';
import Editor from '../components/Editor';
export default function Write() {
  return (
    <div
      className="content_part"
      style={{ margin: '20px 100px', left: '120px' }}
    >
      <div>Draft in Manjunathkalburgi</div>
      <div style={{ marginTop: 100 }}>
        <Editor />
      </div>
    </div>
  );
}
