import React from 'react';

const NodeList = () => {
  function inspectNode(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  return (
    <div className="node-list">
      <button type="button" className="node-button" onClick={inspectNode}>node 1</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 2</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 3</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 4</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 5</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 6</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 7</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 8</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 9</button>
      <button type="button" className="node-button" onClick={inspectNode}>node 10</button>
    </div>
  );
};

export default NodeList;
