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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styled from './fragment.style';
import NodeList from './nodeList';

const Fragment = ({
  status, id, type, nodes,
}) => {
  const [expanded, setExpanded] = useState(false);

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
    <Styled.Fragment
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={handleEnter}
      expanded={expanded}
    >
      <Styled.StatusWrapper>
        <Styled.Status status={status} />
      </Styled.StatusWrapper>
      <Styled.Id>
        {id}
        <NodeList expanded={expanded}>{nodes}</NodeList>
      </Styled.Id>
      <Styled.Type>{type}</Styled.Type>
    </Styled.Fragment>
  );
};

Fragment.defaultProps = {
  nodes: [],
};

Fragment.propTypes = {
  status: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object),
};

export default Fragment;
