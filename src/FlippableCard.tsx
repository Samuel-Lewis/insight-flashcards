import React from 'react';

const COLOUR_SIDE_A = '#1C2331';
const COLOUR_SIDE_B = '#3F729B';

export type FlippableCardProps = {
  sides: string[];
};

type FlippableCardState = {
  flipped: boolean;
};

class FlippableCard extends React.Component<
  FlippableCardProps,
  FlippableCardState
> {
  constructor(props: FlippableCardProps) {
    super(props);
    this.state = {
      flipped: false
    };
  }

  flip = (): void => {
    this.setState({ flipped: !this.state.flipped });
  };

  render(): JSX.Element {
    const { sides } = this.props;
    if (sides.length !== 2) {
      return <>ERROR: {sides}</>;
    }

    return (
      <div
        style={{
          backgroundColor: this.state.flipped ? COLOUR_SIDE_A : COLOUR_SIDE_B,
          color: 'white',
          height: '100vh'
        }}
        onClick={this.flip}
        className="d-flex align-items-center justify-content-center"
      >
        <h1>{this.state.flipped ? sides[0] : sides[1]}</h1>
      </div>
    );
  }
}

export default FlippableCard;
