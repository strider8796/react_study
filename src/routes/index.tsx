import * as React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

import { main } from '../pages'

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={main}/>
        <Route path="*" component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  )
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}


export default Root;