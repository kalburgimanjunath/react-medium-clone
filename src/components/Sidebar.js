import React from 'react';
import Widget from './Widget';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBell,
  faList,
  faClipboardList,
  faSquarePen,
  faUser,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          marginTop: 40,
          marginBottom: 70,
        }}
      >
        <Link to="/">
          <FontAwesomeIcon icon={faUser} color="blue" size="2x" />
        </Link>
      </div>
      <ul
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} color="blue" size="sm" />
          </Link>
        </li>
        <li>
          <Link to="/notification">
            <FontAwesomeIcon icon={faBell} color="blue" size="sm" />
          </Link>
        </li>
        <li>
          <Link to="/lists">
            <FontAwesomeIcon icon={faList} color="blue" size="sm" />
          </Link>
        </li>
        <li>
          <Link to="/stories">
            <FontAwesomeIcon icon={faClipboardList} color="blue" size="sm" />
          </Link>
        </li>
        <li>
          <Link to="/write">
            <FontAwesomeIcon icon={faSquarePen} color="blue" size="sm" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} color="blue" size="sm" />
          </Link>
        </li>
      </ul>
    </>
  );
}
