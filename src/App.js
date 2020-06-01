import React, { Component } from 'react';
import './index.css';

import Counter from './componentSample/State/Counter';
import Fetching from './componentSample/State/Fetching';

import Resource from './componentSample/Effect/Resources';
import WindowResize from './componentSample/Effect/WindowResize';
import DocumentTitle from './componentSample/Effect/DocumentTitle';
import RunEffectOnce from './componentSample/Effect/RunEffectOnce';
import UseEffectCleanup from './componentSample/Effect/UseEffectCleanup';
import IntervalCounter from './componentSample/Effect/IntervalCounter';
import DataFetching from './componentSample/Effect/DataFetching';
import CounterOne from './componentSample/Reducer/CounterOne';
import CounterTwo from './componentSample/Reducer/CounterTwo';
import CounterThree from './componentSample/Reducer/CounterThree';

import {GlobalContext} from './componentSample/Context/GlobalContext';
import ComponentA from './componentSample/Context/components/ComponentA';
import ComponentB from './componentSample/Context/components/ComponentB';
import ComponentC from './componentSample/Context/components/ComponentC';
import ReducerDataFetching from './componentSample/Reducer/ReducerDataFetching';
import ParentComponent from './componentSample/CallbackHook/ParentComponent';
import CounterMemo from './componentSample/MemoHook/CounterMemo';
import FocusInput from './componentSample/Ref/FocusInput';
import Timer from './componentSample/Ref/Timer';
import ParentDocTitleOne from './componentSample/CustomHooks/Title/ParentDocTitleOne';
import CounterOneCustom from './componentSample/CustomHooks/Counter/CounterOneCustom';
import CounterTwoCustom from './componentSample/CustomHooks/Counter/CounterTwoCustom';
import UserForm from './componentSample/CustomHooks/Input/UserForm';

function App() {

  return (
    <GlobalContext>
        {/* <Counter /> */}
        {/* <Fetching /> */}
        {/* <Resource /> */}
        {/*<WindowResize /> */}
        {/* <DocumentTitle /> */}
        {/* <RunEffectOnce /> */}
        {/* <UseEffectCleanup /> */}
        {/* <IntervalCounter /> */}
        {/* <DataFetching /> */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* <ComponentA /> */}
        {/* <ComponentB /> */}
        {/* <ComponentC /> */}
        {/* <ReducerDataFetching /> */}
        {/* <ParentComponent /> */}
        {/* <CounterMemo /> */}
        {/* <FocusInput /> */}
        {/* <Timer /> */}
        {/* <ParentDocTitleOne /> */}
        {/* <CounterOneCustom />
        <CounterTwoCustom /> */}
        <UserForm />
    </GlobalContext>

  );
}

export default App;
