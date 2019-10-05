import { Redirect, RouteComponentProps } from 'react-router';

import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FlippableCard from './FlippableCard';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { loadDeck } from './Deck';
import qs from 'query-string';
import shuffle from 'shuffle-array';

export type ViewerProps = RouteComponentProps;
type ViewerState = {
  deckNames: string[];
  redirect: boolean;
  words: string[][];
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
      words: [],
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
    Promise.all(loads)
      .then(data => shuffle(data.flat()).slice(0, 20))
      .then(data =>
        this.setState({
          words: data,
          loading: false
        })
      );
  }

  render(): JSX.Element {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const spinner = (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

    let body;

    if (this.state.loading) {
      body = spinner;
    }

    body = (
      <Carousel slide={false} interval={0}>
        {this.state.words.map(word => (
          <Carousel.Item key={`${word[0]}-${word[1]}`}>
            <FlippableCard sides={word} />
          </Carousel.Item>
        ))}
      </Carousel>
    );

    return (
      <Container
        fluid={true}
        style={{ padding: 0, margin: 0, overflow: 'hidden' }}
      >
        <Row>
          <Col className="text-center">{body}</Col>
        </Row>
      </Container>
    );
  }
}

export default Viewer;
