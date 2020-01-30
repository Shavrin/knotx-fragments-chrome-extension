import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Fragment = (props) => {
  const { success, id, type } = props;
  const [expanded, setExpanded] = useState(false);
  const fragment = useRef(null);
  useEffect(() => {
    if (expanded) {
      fragment.current.classList.add('expanded');
    } else {
      fragment.current.classList.remove('expanded');
    }
  }, [expanded]);
  const statusClass = success ? 'fragment-status-success' : 'fragment-status-failure';
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
    <div ref={fragment} role="menuitem" className="fragment-item" tabIndex="0" onClick={handleClick} onKeyDown={handleEnter}>
      <div className="fragment-status-wrapper">
        <div className={`fragment-status ${statusClass}`} />
      </div>
      <div className="fragment-id">{id}</div>
      <div className="fragment-type">{type}</div>
    </div>
  );
};

Fragment.defaultProps = {
  success: false,
  id: '-1',
  type: 'null',
};

Fragment.propTypes = {
  success: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default Fragment;
