import React from 'react';
import PropTypes from 'prop-types';

const Fragment = (props) => {
  const { success, id, type } = props;
  const statusClass = success ? 'fragment-status-success' : 'fragment-status-failure';

  return (
    <div className="fragment-item">
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
