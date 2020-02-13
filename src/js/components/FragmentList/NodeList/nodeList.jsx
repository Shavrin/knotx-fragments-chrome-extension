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
import propTypes from 'prop-types';
import { NodeButton, NodeListWrapper } from './nodeList.style';

const NodeList = ({ expanded, children }) => {
  const highlightClass = 'knotx-devtool-highlight';

  function inspectNode(event, selector) {
    event.stopPropagation();
    chrome.devtools.inspectedWindow.eval(`inspect(document.querySelector('${selector}'))`);
  }

  function highlightNode(event, selector) {
    event.preventDefault();
    event.stopPropagation();
    chrome
      .devtools
      .inspectedWindow
      .eval(`document.querySelector('${selector}').classList.add("${highlightClass}")`);
  }

  function hideHighlightNode(event, selector) {
    event.preventDefault();
    event.stopPropagation();
    chrome
      .devtools
      .inspectedWindow
      .eval(`document.querySelector('${selector}').classList.remove("${highlightClass}")`);
  }

  return (
    <NodeListWrapper expanded={expanded}>
      {children.map((node) => (
        <NodeButton
          key={node.selector}
          onClick={(event) => { inspectNode(event, node.selector); }}
          onMouseEnter={(event) => { highlightNode(event, node.selector); }}
          onMouseLeave={(event) => { hideHighlightNode(event, node.selector); }}
        >
          {node.tag}
        </NodeButton>
      ))}
    </NodeListWrapper>
  );
};

NodeList.defaultProps = {
  expanded: false,
  children: [],
};

NodeList.propTypes = {
  expanded: propTypes.bool,
  children: propTypes.arrayOf(propTypes.object),
};

export default NodeList;
