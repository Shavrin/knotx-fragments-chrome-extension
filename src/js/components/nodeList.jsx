import React from 'react';

const NodeList = () => {
  function inspectNode(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  return (
    <div className="node-list">
      <button className="node-button" onClick={inspectNode}>node 1</button>
      <button className="node-button" onClick={inspectNode}>node 1</button>
      <button className="node-button" onClick={inspectNode}>node 1</button>
      <button className="node-button" onClick={inspectNode}>node 1</button>
      <button className="node-button" onClick={inspectNode}>node 1</button>
      <button className="node-button" onClick={inspectNode}>node 1</button>
      <button className="node-button" onClick={inspectNode}>node 1</button>
      <button className="node-button" onClick={inspectNode}>node 1</button>
    </div>
  );
};

export default NodeList;
