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
import { useSelector } from 'react-redux';
import Styled from './fragmentList.style';
import Fragment from './fragment';

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
    const sortOrder = ['success', 'other', 'missing', 'unprocessed', 'error'];
    const ordering = {};
    sortOrder.forEach((element, index) => { ordering[element] = index; });
    const sortedFragments = fragments.concat().sort((a, b) => (
      ordering[a.props.status] - ordering[b.props.status] || a.props.status.localeCompare(b.props.status)
    ));
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
    <Styled.FragmentList>
      <Styled.SortingWrapper>
        <Styled.SortingButtonStatus onClick={sortByStatus}>&darr;</Styled.SortingButtonStatus>
        <Styled.SortingButtonId onClick={sortById}>ID&darr;</Styled.SortingButtonId>
        <Styled.SortingButtonType onClick={sortByType}>TYPE&darr;</Styled.SortingButtonType>
      </Styled.SortingWrapper>
      {fragments}
    </Styled.FragmentList>
  );
};

export default FragmentList;
