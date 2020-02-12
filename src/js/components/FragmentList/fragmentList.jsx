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
import {
  FragmentListWrapper, SortingButton, SortingWrapper,
} from './fragmentList.style';
import FragmentListItem from './FragmentListItem/fragmentListItem';

const FragmentList = () => {
  function mapDataToComponents({ fragments }) {
    return fragments.map(({ debug, nodes }) => {
      const { fragment } = debug;
      return (
        <FragmentListItem
          key={fragment.id}
          id={fragment.id}
          status={debug.status.toLowerCase()}
          type={fragment.type}
          nodes={nodes}
        />
      );
    });
  }

  const data = useSelector(({ pageData }) => pageData);
  const parsedData = mapDataToComponents(data);
  const [fragments, setFragments] = useState(parsedData);

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
    const sortedFragments = fragments.concat().sort(
      ({ props: { id: idA } }, { props: { id: idB } }) => idA.localeCompare(idB),
    );
    setFragments(sortedFragments);
  }

  function sortByType() {
    const sortedFragments = fragments.concat().sort(
      ({ props: { type: typeA } }, { props: { type: typeB } }) => typeA.localeCompare(typeB),
    );
    setFragments(sortedFragments);
  }

  return (
    <FragmentListWrapper>
      <SortingWrapper>
        <SortingButton status onClick={sortByStatus}>&darr;</SortingButton>
        <SortingButton onClick={sortById}>ID&darr;</SortingButton>
        <SortingButton onClick={sortByType}>TYPE&darr;</SortingButton>
      </SortingWrapper>
      {fragments}
    </FragmentListWrapper>
  );
};

export default FragmentList;
