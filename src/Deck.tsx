import Card from 'react-bootstrap/Card';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

type DeckProps = {
  title: string;
  onChange?: (deckName: string, newState: boolean) => void;
};

type DeckState = {
  loading: boolean;
  selected: boolean;
  wordCount?: number;
};

export class Deck extends React.Component<DeckProps, DeckState> {
  constructor(props: DeckProps) {
    super(props);
    this.state = {
      loading: true,
      selected: false
    };

    this.loadDeck();
  }

  loadDeck(): void {
    fetch(`./data/${this.props.title}.csv`)
      .then(r => r.text())
      .then(d => d.split('\n').map(line => line.trim().split(';')))
      .then(d => d.filter(phrase => phrase.length === 2))
      .then(d =>
        this.setState({
          loading: false,
          wordCount: d.length
        })
      );
  }

  toggleSelection = (): void => {
    this.setState({ selected: !this.state.selected });
    if (this.props.onChange) {
      this.props.onChange(this.props.title, !this.state.selected);
    }
  };

  render(): JSX.Element {
    const { title } = this.props;
    const { loading, wordCount, selected } = this.state;

    let body;
    if (loading || !wordCount) {
      body = (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      body = (
        <>
          <Card.Title>
            <h5 style={{ textTransform: 'capitalize' }}>{title}</h5>
          </Card.Title>
          <Card.Subtitle className="mb-2">
            {wordCount} card{wordCount > 1 ? 's' : ''}
          </Card.Subtitle>
        </>
      );
    }

    return (
      <Card
        key={title}
        style={{ width: '10rem', height: '8rem' }}
        className="text-center"
        bg={selected ? 'primary' : undefined}
        text={selected ? 'white' : undefined}
        onClick={this.toggleSelection}
      >
        <Card.Body>{body}</Card.Body>
      </Card>
    );
  }
}
