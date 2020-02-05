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
