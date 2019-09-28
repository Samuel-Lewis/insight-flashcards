import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Deck } from './Deck';
import React from 'react';
import Row from 'react-bootstrap/Row';

type AppProps = {};
type AppState = {
  decks: any[]; // FIXME: Type for Deck[]
  selectedDecks: Set<string>;
};

const dataFiles = ['animals', 'clothes', 'food'];

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const decks = dataFiles
      .sort()
      .map(file => (
        <Deck key={file} title={file} onChange={this.deckChanged} />
      ));

    this.state = {
      decks,
      selectedDecks: new Set()
    };
  }

  deckChanged = (deckName: string, newState: boolean): void => {
    const { selectedDecks } = this.state;
    if (newState) {
      selectedDecks.add(deckName);
    } else {
      selectedDecks.delete(deckName);
    }

    this.setState({ selectedDecks });
  };

  start = (): void => {
    console.log(this.state.selectedDecks);
  };

  render(): JSX.Element {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Insight</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>{this.state.decks}</CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.start}>Lets go</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
