/*
 * Copyright (C) 2020 Knot.x Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NodeList from './nodeList';

const Fragment = ({ status, id, type }) => {
  const [expanded, setExpanded] = useState(false);
  const fragment = useRef(null);

  useEffect(() => {
    if (expanded) {
      fragment.current.classList.add('expanded');
    } else {
      fragment.current.classList.remove('expanded');
    }
  }, [expanded]);

  let statusClass = '';
  switch (status) {
    case 'success':
      statusClass = 'fragment-status-success';
      break;
    case 'error':
      statusClass = 'fragment-status-error';
      break;
    case 'other':
      statusClass = 'fragment-status-warning';
      break;
    case 'missing':
      statusClass = 'fragment-status-warning';
      break;
    case 'unprocessed':
      statusClass = 'fragment-status-unprocessed';
      break;
    default:
      break;
  }

  function handleClick(event) {
    event.preventDefault();
    setExpanded(!expanded);
  }

  function handleEnter(event) {
    if (event.keyCode === 13) {
      setExpanded(!expanded);
    }
  }

  return (
    <div
      ref={fragment}
      role="menuitem"
      className="fragment-item"
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={handleEnter}
    >
      <div className="fragment-status-wrapper">
        <div className={`fragment-status ${statusClass}`} />
      </div>
      <div className="fragment-id">
        {id}
        <NodeList />
      </div>
      <div className="fragment-type">{type}</div>
    </div>
  );
};

Fragment.defaultProps = {
  status: 'null',
  id: '-1',
  type: 'null',
};

Fragment.propTypes = {
  status: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default Fragment;
