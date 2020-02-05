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
