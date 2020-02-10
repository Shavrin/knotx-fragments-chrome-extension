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
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Fragment from './fragment';

const StyledFragmentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const SortingWrapper = styled.div`
    display: flex;
    &-status {
    }
    &-id {
      flex: 1;
    }
    &-type {
      flex: 1;
    }
`;

const SortingButton = styled.button`
      border: 0;
      margin: 2px;
      padding: 2px;
      color: ${({ theme }) => theme.textColor};
      background-color: ${({ theme }) => theme.buttonBgColor};
      &:active {
        background-color: ${({ theme }) => theme.fragmentHighlight};
      }
`;

const SortingButtonStatus = styled(SortingButton)`
      width: 15px;
`;

const SortingButtonId = styled(SortingButton)`
      flex: 1;
`;

const SortingButtonType = styled(SortingButton)`
      flex: 1;
`;


const FragmentList = () => {
  function mapDataToComponents({ fragments }) {
    return fragments.map(({ debug, nodes }) => {
      const { fragment } = debug;
      return (
        <Fragment
          key={fragment.id}
          id={fragment.id}
          status={debug.status.toLowerCase()}
          type={fragment.type}
          nodes={nodes}
        />
      );
    });
  }


  function sortByProcessingTime(fragments) {
    const sortedFragments = fragments.concat().sort(
      (a, b) => {
        const sortWeightA = parseInt(a.props.time, 10);
        const sortWeightB = parseInt(b.props.time, 10);
        if (sortWeightA < sortWeightB) return -1;
        if (sortWeightA > sortWeightB) return 1;
        return 0;
      },
    );
    return sortedFragments;
  }

  const data = useSelector(({ pageData }) => pageData);

  const parsedData = mapDataToComponents(data);
  const sortedFragmentsByTime = sortByProcessingTime(parsedData);
  const [fragments, setFragments] = useState(sortedFragmentsByTime);

  function sortByStatus() {
    function getStatusSortWeight(status) {
      let sortWeight = 0;
      switch (status) {
        case 'error':
          sortWeight = 0;
          break;
        case 'other':
          sortWeight = 1;
          break;
        case 'missing':
          sortWeight = 1;
          break;
        case 'success':
          sortWeight = 2;
          break;
        case 'unprocessed':
          sortWeight = 3;
          break;
        default: sortWeight = 4;
          break;
      }
      return sortWeight;
    }

    const sortedFragments = fragments.concat().sort((a, b) => {
      const { status: statusA } = a.props;
      const { status: statusB } = b.props;
      const sortWeightA = getStatusSortWeight(statusA);
      const sortWeightB = getStatusSortWeight(statusB);

      if (sortWeightA < sortWeightB) return -1;
      if (sortWeightA > sortWeightB) return 1;
      return 0;
    });
    setFragments(sortedFragments);
  }

  function sortById() {
    const sortedFragments = fragments.concat().sort((a, b) => a.props.id.localeCompare(b.props.id));
    setFragments(sortedFragments);
  }

  function sortByType() {
    const sortedFragments = fragments.concat().sort((a, b) => a.props.type.localeCompare(b.props.type));
    setFragments(sortedFragments);
  }

  return (
    <StyledFragmentList>
      <SortingWrapper>
        <SortingButtonStatus onClick={sortByStatus}>&darr;</SortingButtonStatus>
        <SortingButtonId onClick={sortById}>ID&darr;</SortingButtonId>
        <SortingButtonType onClick={sortByType}>TYPE&darr;</SortingButtonType>
      </SortingWrapper>
      {fragments}
    </StyledFragmentList>
  );
};

export default FragmentList;