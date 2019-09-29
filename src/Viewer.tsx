import { Redirect, RouteComponentProps } from 'react-router';

import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { loadDeck } from './Deck';
import qs from 'query-string';

export type ViewerProps = RouteComponentProps;
type ViewerState = {
  deckNames: string[];
  redirect: boolean;
  words: string;
};

class Viewer extends React.Component<ViewerProps, ViewerState> {
  constructor(props: ViewerProps) {
    super(props);
    const params = qs.parse(this.props.location.search, {
      arrayFormat: 'comma'
    });
    const deckNames = params.decks || params.d || [];

    this.state = {
      deckNames: typeof deckNames === 'string' ? [deckNames] : deckNames,
      redirect: false,
      words: ''
    };
  }

  componentDidMount(): void {
    const { deckNames } = this.state;
    if (deckNames.length === 0) {
      this.setState({ redirect: true });
      return;
    }

    const loads = deckNames.map(loadDeck);
    Promise.all(loads).then(data =>
      this.setState({ words: JSON.stringify(data) })
    );
  }

  render(): JSX.Element {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <Row>
        <Col>
          <h1>Woot</h1>
          {this.state.words}
        </Col>
      </Row>
    );
  }
}

export default Viewer;
