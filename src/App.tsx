import { Redirect, Route, Switch } from 'react-router-dom';
import Viewer, { ViewerProps } from './Viewer';

import DeckList from './DeckList';
import React from 'react';

const NotFound = (): JSX.Element => {
  return <Redirect to="/" />;
};

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/view"
            render={(props: ViewerProps): JSX.Element => <Viewer {...props} />}
          ></Route>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
