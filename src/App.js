import SevenSegmentDisplay from "./react-seven-segment-display";
import styled from "styled-components";

const React = require("react");
const ms = require("pretty-ms");

const Wrapper = styled.section`
  padding: 7em;
  background: yellowgreen;
`;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);

    if (this.time === 99) {
      this.stopTimer();
    }
  }

  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  }
  stopTimer() {
    this.setState({ time: 0 });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0 });
  }

  render() {
    let start = (
      <button
        style={{
          color: "green",
          padding: "25px",
          margin: "10px",
          fontFamily: "Arial",
          borderRadius: "25px",
          border: "0px"
        }}
        onClick={this.startTimer}
      >
        start
      </button>
    );

    let stop = (
      <button
        style={{
          color: "red",
          padding: "25px",
          fontFamily: "Arial",
          borderRadius: "25px",
          border: "0px"
        }}
        onClick={this.stopTimer}
      >
        stop
      </button>
    );

    return (
      <div>
        <Wrapper>
          <h3
            style={{
              fontFamily: "Arial",
              margin: "-20px",
              padding: "120px",
              backgroundImage: `url("data:image/jpeg;base64,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")`,
              backgroundRepeat: "no-repeat",
              width: "250px",
              height: "250px"
            }}
          >
            {" "}
            {ms(this.state.time)}
          </h3>
          {start}
          {stop}
        </Wrapper>
      </div>
    );
  }
}
module.exports = Timer;
