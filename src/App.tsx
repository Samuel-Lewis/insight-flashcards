import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import { Deck } from './Deck';
import React from 'react';
import Row from 'react-bootstrap/Row';

type AppProps = {};
type AppState = {
  decks: any[];
};

const dataFiles = ['animals', 'clothes', 'food'];

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const decks = dataFiles.map(file => <Deck key={file} title={file} />);

    this.state = {
      decks
    };
  }

  start() {
    console.log('leezzgooo');
  }

  render(): JSX.Element {
    return (
      <Container>
        <Row className="col-xl">
          <h1>Insight</h1>
        </Row>
        <Row className="col-xl">
          <CardDeck>{this.state.decks}</CardDeck>
        </Row>
        <Row className="col-xl">
          <Button onClick={this.start}>Lets go</Button>
        </Row>
      </Container>
    );
  }
}

export default App;
