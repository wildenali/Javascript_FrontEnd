import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// -------------------- React_003_StateLess_Component_File --------------------
import React_003_StateLess_Component from './component/React_003_StateLess_Component_File';
// -------------------- React_003_StateLess_Component_File --------------------

// -------------------- React_005_StateFull_Component_File --------------------
import React_005_StateFull_Component from './container/React_005_StateFull_Component_File';
// -------------------- React_005_StateFull_Component_File --------------------

// -------------------- React_006_YoutubeComp_File --------------------
import React_006_YoutubeComp from './component/React_006_YoutubeComp/React_006_YoutubeComp_File';
// -------------------- React_006_YoutubeComp_File --------------------

// -------------------- React_006_YoutubeComp_Home_File --------------------
import React_006_YoutubeComp_Home from './container/React_006_YoutubeHome/React_006_Youtube_Home_File'
import React_008_LifeCycleComp from './container/React_008_LifeCycleComp/React_008_LifeCycleCompFile';
// -------------------- React_006_YoutubeComp_Home_File --------------------




// -------------------- React_001_HellowWorld --------------------
const HelloWorld = () => {
  // return <p>Hello hahahaha</p>
  return (
    <div>
      <p>-------------------- React_001_HellowWorld --------------------</p>
      <p>Hello hahahaha</p>
      <p>-------------------- React_001_HellowWorld --------------------</p>
      <br/>
    </div>
  );
}
// -------------------- React_001_HellowWorld --------------------

// -------------------- React_002_StateLess_Component --------------------
// Cara 1
// function React_002_StateLess_Component() {
//   return <p>Hellow React_002_StateLess_Component</p>
// }
// atau dengan cara tanpa function pke const
// Cara 1
const React_002_StateLess_Component = () => {
  // return <p>Hellow React_002_StateLess_Component</p>
  return (
    <div>
      <p>-------------------- React_002_StateLess_Component --------------------</p>
      <p>Hellow React_002_StateLess_Component</p>
      <p>-------------------- React_002_StateLess_Component --------------------</p>
      <br/>
    </div>
  );
}
// -------------------- React_002_StateLess_Component --------------------

// -------------------- React_004_StateFull_Component -------------------
class React_004_StateFull_Component extends React.Component {
  render() {
    // return <p>Hellow React_004_StateFull_Component</p>
    return (
      <div>
        <p>-------------------- React_004_StateFull_Component --------------------</p>
        <p>Hellow React_004_StateFull_Component</p>
        <p>-------------------- React_004_StateFull_Component --------------------</p>
        <br/>
      </div>
    );
  }
}
// -------------------- React_004_StateFull_Component --------------------









ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* // -------------------- React_001_HellowWorld -------------------- */}
    <HelloWorld />
    {/* // -------------------- React_001_HellowWorld -------------------- */}

    {/* // -------------------- React_002_StateLess_Component -------------------- */}
    <React_002_StateLess_Component />
    {/* // -------------------- React_002_StateLess_Component -------------------- */}

    {/* // -------------------- React_003_StateLess_Component_File -------------------- */}
    <React_003_StateLess_Component />
    {/* // -------------------- React_003_StateLess_Component_File -------------------- */}

    {/* // -------------------- React_004_StateFull_Component -------------------- */}
    <React_004_StateFull_Component />
    {/* // -------------------- React_004_StateFull_Component -------------------- */}

    {/* // -------------------- React_005_StateFull_Component -------------------- */}
    <React_005_StateFull_Component />
    {/* // -------------------- React_005_StateFull_Component -------------------- */}

    {/* // -------------------- React_006_YoutubeComp_File -------------------- */}
    <React_006_YoutubeComp />
    {/* // -------------------- React_006_YoutubeComp_File -------------------- */}

    {/* // -------------------- React_006_YoutubeComp_Home_File -------------------- */}
    <React_006_YoutubeComp_Home />
    {/* // -------------------- React_006_YoutubeComp_Home_File -------------------- */}

    {/* // -------------------- React_008_LifeCycleCompFile -------------------- */}
    <React_008_LifeCycleComp />
    {/* // -------------------- React_008_LifeCycleCompFile -------------------- */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();