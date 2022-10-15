import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faClipboardList,
  faSquarePen,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
export default function Social() {
  return (
    <ul
      style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}
    >
      <li>Tw</li>
      <li>
        {/* <FontAwesomeIcon icon={faFacebook} color="blue" /> */}
        Fb
      </li>
      <li>Ln</li>
      <li>Lk</li>
      <li>Add into List</li>
      <li>More</li>
    </ul>
  );
}
