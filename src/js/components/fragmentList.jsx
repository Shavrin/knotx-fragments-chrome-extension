import React, { useState } from 'react';
import Fragment from './fragment';

const FragmentList = () => {
  const mockData = [
    {
      status: 'success', id: 'a', type: 'action', time: '110',
    },
    {
      status: 'error', id: 'b', type: 'action', time: '2',
    },
    {
      status: 'missing', id: 'c', type: 'diff', time: '3',
    },
    {
      status: 'other', id: 'ddasdafsdfsffsdf', type: 'action', time: '4',
    },
    {
      status: 'success', id: 'ddasdafsdfsffsdf', type: 'action', time: '5',
    },
    {
      status: 'success', id: 'ddasdafsdfsffsdf', type: 'action', time: '6',
    },
    {
      status: 'success', id: 'd', type: 'action', time: '7',
    },
    {
      status: 'success', id: 'e', type: 'action', time: '8',
    },
    {
      status: 'success', id: 'f', type: 'action', time: '9',
    },
    {
      status: 'success', id: 'ddasdafsdfsffsdf', type: 'action', time: '1123',
    },
    {
      status: 'success', id: 'ddasdafsdfsffsdf', type: 'action', time: '11',
    },
    {
      status: 'success', id: 'ddasdafsdfsffsdf', type: 'action', time: '12',
    },
    {
      status: 'success', id: 'ddasdafsdfsffsdf', type: 'action', time: '13',
    },
    {
      status: 'success', id: 'ddasdafsdfsffsdf', type: 'action', time: '1',
    },
  ];

  const parsedData = mockData.map(({
    status, id, type, time,
  }) => (
    <Fragment
      key={time}
      status={status}
      id={id}
      type={type}
      time={time}
    />
  ));

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

  const fragmentsSortedByTime = sortByProcessingTime(parsedData);
  const [fragments, setFragments] = useState(fragmentsSortedByTime);


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
    <div className="fragment-list">
      <div className="fragment-sorting">
        <button type="button" className="fragment-sorting-status" onClick={sortByStatus}>^</button>
        <button type="button" className="fragment-sorting-id" onClick={sortById}>^</button>
        <button type="button" className="fragment-sorting-type" onClick={sortByType}>^</button>
      </div>
      {fragments}
    </div>
  );
};

export default FragmentList;
