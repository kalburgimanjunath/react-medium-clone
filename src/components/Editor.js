import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
const TextEditor = ({ main }) => {
  const [showMenu, setMenu] = useState(false);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <div onClick={() => setMenu(!showMenu)}>
        <FontAwesomeIcon
          icon={faPlusCircle}
          color="blue"
          size={main ? '2x' : 'md'}
        />
        <div className={showMenu ? 'showMenu' : 'hideMenu'}>
          {showMenu}
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="blue"
            size={main ? '2x' : 'md'}
          />
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="blue"
            size={main ? '2x' : 'md'}
          />
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="blue"
            size={main ? '2x' : 'md'}
          />
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="blue"
            size={main ? '2x' : 'md'}
          />
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="blue"
            size={main ? '2x' : 'md'}
          />
        </div>
      </div>
      <div className={main ? `editor_main` : 'editor'}>
        <input
          type="text"
          className="editor"
          id="editor"
          placeholder={main ? 'Title' : 'Tell Your Story'}
        />
      </div>
    </div>
  );
};

export default function Editor() {
  const [allEditors, setEditor] = useState([]);

  const addEditor = () => {
    const newComponent = <TextEditor />;
    setEditor([newComponent, ...allEditors]);
  };
  console.log(allEditors);
  return (
    <div>
      <TextEditor main={true} />
      {allEditors}
      <div onClick={addEditor} style={{ height: 100 }}></div>
    </div>
  );
}
