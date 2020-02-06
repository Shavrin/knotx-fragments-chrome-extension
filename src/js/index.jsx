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
import ReactDOM from 'react-dom';
import { Store } from 'webext-redux';
import { Provider } from 'react-redux';
import App from './apps/App';
import { REDUX_PORT, PANEL_NAME } from './helpers/constants';
import * as fragmentsJson from '../../data.json';

const store = new Store({ portName: REDUX_PORT });

function parseData(data) {
  const iterateOverObject = (obj) => {
    const filterFragmentData = (fragment) => ({
      id: fragment.id,
      status: fragment.status,
      type: fragment.type,
      started: fragment.response?.invocations[0].started ?? '-1',
      finished: fragment.response?.invocations[0].finished ?? '-1',
    });

    const iterate = (object, array) => {
      Object.keys(object).forEach((key) => {
        if (key === 'id') {
          array.push(filterFragmentData(object));
        }
        if (typeof object[key] === 'object') {
          iterate(object[key], array);
        }
      });
    };
    const fragments = [];
    iterate(obj, fragments);
    return fragments;
  };

  return iterateOverObject(data);
}

const parsedData = parseData(fragmentsJson);
console.log(fragmentsJson);

console.log(parsedData);

chrome.devtools.panels.create(PANEL_NAME, null, 'index.html');

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
});
