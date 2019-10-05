import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Deck } from './Deck';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import Row from 'react-bootstrap/Row';

type DeckListProps = {};
type DeckListState = {
  decks: any[]; // FIXME: Type for Deck[]
  selectedDecks: Set<string>;
};

const dataFiles = [
  'adjectives',
  'families',
  'prepositions',
  'animals',
  'food',
  'present',
  'basics',
  'infinitives',
  'pronouns',
  'clothing',
  'location',
  'qualities',
  'colours',
  'numbers',
  'that-those',
  'dates',
  'phrases-vocab',
  'time',
  'definite-plurals',
  'phrases',
  'work',
  'definites',
  'plurals',
  'direction',
  'possesive'
];

class DeckList extends React.Component<DeckListProps, DeckListState> {
  constructor(props: DeckListProps) {
    super(props);
    const decks = dataFiles
      .sort()
      .map(file => (
        <Deck
          key={file}
          title={file.replace('-', ' ')}
          onChange={this.deckChanged}
        />
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
      <Container>
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
          <Col className="fixed-bottom">
            <LinkContainer
              to={
                '/view?decks=' + Array.from(this.state.selectedDecks).join(',')
              }
            >
              <Button variant="primary" size="lg" block>
                Start!
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DeckList;
