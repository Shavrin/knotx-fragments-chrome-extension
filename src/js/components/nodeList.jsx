import React from 'react';

const NodeList = () => {
  function inspectNode(event) {
    event.preventDefault();
    event.stopPropagation();
    const id = '9f1a2c76-148e-4d36-af8b-239ea8b785fb';
    const selector = `[data-knotx-id="${id}"]:not(script)`;
    const query = `inspect(document.querySelector('${selector}'))`;

    chrome.devtools.inspectedWindow.eval(query);
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
