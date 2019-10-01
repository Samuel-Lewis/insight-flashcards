import { Redirect, RouteComponentProps } from 'react-router';

import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { loadDeck } from './Deck';
import qs from 'query-string';

export type ViewerProps = RouteComponentProps;
type ViewerState = {
  deckNames: string[];
  redirect: boolean;
  words: string;
  loading: boolean;
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
      words: '',
      loading: true
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
      this.setState({ words: JSON.stringify(data), loading: false })
    );
  }

  render(): JSX.Element {
    if (this.state.loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

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
