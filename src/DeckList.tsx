import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import Col from 'react-bootstrap/Col';
import { Deck } from './Deck';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import Row from 'react-bootstrap/Row';

type DeckListProps = {};
type DeckListState = {
  decks: any[]; // FIXME: Type for Deck[]
  selectedDecks: Set<string>;
};

const dataFiles = ['animals', 'basics', 'food', 'phrases-vocab', 'phrases'];

class DeckList extends React.Component<DeckListProps, DeckListState> {
  constructor(props: DeckListProps) {
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

  render(): JSX.Element {
    return (
      <>
        <Row>
          <Col>
            <h1>Insight</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardColumns>{this.state.decks}</CardColumns>
          </Col>
        </Row>
        <Row>
          <Col>
            <LinkContainer
              to={
                '/view?decks=' + Array.from(this.state.selectedDecks).join(',')
              }
            >
              <Button>Start!</Button>
            </LinkContainer>
          </Col>
        </Row>
      </>
    );
  }
}

export default DeckList;
