import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

type CardType = JSX.Element;
type AppProps = {};
type AppState = {
  cards: CardType[];
};

const dataFiles = ['animals', 'clothes', 'food'];

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      cards: []
    };

    dataFiles.map((listName: string) =>
      fetch(`./data/${listName}.csv`)
        .then(r => r.text())
        .then(d => d.split('\n').map(line => line.trim().split(';')))
        .then(d => d.filter(phrase => phrase.length === 2))
        .then(d => this.cardify(listName, d.length))
    );
  }

  cardify = (listName: string, wordCount: number): void => {
    const newCard = (
      <Card key={listName} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            <h5>{listName}</h5>
          </Card.Title>
          <Card.Subtitle>
            {wordCount} phrase{wordCount > 1 ? 's' : ''}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    );
    this.setState({ cards: [...this.state.cards, newCard] });
  };

  render(): JSX.Element {
    return (
      <Container>
        <Row className="col-xl">
          <h1>Insight</h1>
        </Row>
        <Row className="col-xl">{this.state.cards}</Row>
        <Row className="col-xl">
          <Button>Lets go</Button>
        </Row>
      </Container>
    );
  }
}

export default App;
