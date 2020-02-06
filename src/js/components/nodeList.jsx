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
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledNodeList = styled.div`
    display: ${(props) => (props.expanded === true ? 'block' : 'none')};
`;

const NodeButton = styled.button`
    background-color: transparent;
    border: 0;
    width: 100%;
    color: #d3d3d3;
    text-align: start;
    border-bottom: 1px solid #dcdcdc44;
    &:hover {
      background-color: #0e000034;
    }
    &:nth-child(2n + 1) {
      background-color: #add8e60e;
      &:hover {
        background-color: #0e000034;
      }
    }
`;


const NodeList = ({ expanded }) => {
  function inspectNode(event) {
    event.preventDefault();
    event.stopPropagation();

    const id = '9f1a2c76-148e-4d36-af8b-239ea8b785fb';
    const selector = `[data-knotx-id="${id}"]:not(script)`;
    const query = `inspect(document.querySelector('${selector}'))`;

    chrome.devtools.inspectedWindow.eval(query);
  }

  return (
    <StyledNodeList expanded={expanded}>
      <NodeButton onClick={inspectNode}>node 1</NodeButton>
      <NodeButton onClick={inspectNode}>node 2</NodeButton>
      <NodeButton onClick={inspectNode}>node 3</NodeButton>
      <NodeButton onClick={inspectNode}>node 4</NodeButton>
      <NodeButton onClick={inspectNode}>node 5</NodeButton>
      <NodeButton onClick={inspectNode}>node 6</NodeButton>
      <NodeButton onClick={inspectNode}>node 7</NodeButton>
      <NodeButton onClick={inspectNode}>node 8</NodeButton>
      <NodeButton onClick={inspectNode}>node 9</NodeButton>
      <NodeButton onClick={inspectNode}>node 10</NodeButton>
      <NodeButton onClick={inspectNode}>node 11</NodeButton>
      <NodeButton onClick={inspectNode}>node 12</NodeButton>
      <NodeButton onClick={inspectNode}>node 13</NodeButton>
    </StyledNodeList>
  );
};

NodeList.defaultProps = {
  expanded: false,
};

NodeList.propTypes = {
  expanded: propTypes.bool,
};
export default NodeList;
