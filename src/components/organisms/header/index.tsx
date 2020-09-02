import * as React from 'react';

import logo from './m_logo.svg'

function Header():React.ReactElement {

  return (
    <img src={logo} alt = 'logo!!'/>
  );
}

//   <div className="App">
//     <header className="App-header">
//       {/*<img src={logo} className="App-logo" alt="logo" />*/}
//       <p>
//         Edit <code>src/App.tsx</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {f('Learn React')}
//       </a>
//       {/*<span>{props || 'null'}</span>*/}
//     </header>
//   </div>


export default Header;

