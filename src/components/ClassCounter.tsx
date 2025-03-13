import { Component } from "react";
import { Box, Typography, Button } from "@mui/material";

interface ClassCounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
}

interface ClassCounterState {
  count: number;
}

export class ClassCounter extends Component<
  ClassCounterProps,
  ClassCounterState
> {
  constructor(props: ClassCounterProps) {
    super(props);

    this.state = {
      count: props.initialValue ?? 0,
    };

    console.log("ClassCounter constructor called with props:", props);
  }

  componentDidMount() {
    console.log("ClassCounter mounted with count:", this.state.count);
  }

  componentDidUpdate(
    prevProps: ClassCounterProps,
    prevState: ClassCounterState,
  ) {
    if (
      prevProps.initialValue !== this.props.initialValue &&
      this.props.initialValue !== undefined
    ) {
      this.setState({ count: this.props.initialValue });
    }

    if (prevState.count !== this.state.count) {
      console.log("Count updated:", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("ClassCounter unmounted");
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + (this.props.step ?? 1),
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - (this.props.step ?? 1),
    }));
  };

  reset = () => {
    this.setState({
      count: this.props.initialValue ?? 0,
    });
  };

  render() {
    const { label = "Counter" } = this.props;
    const { count } = this.state;

    console.log("ClassCounter rendering with count:", count);

    return (
      <Box
        sx={{
          color: "#333",
          border: "1px solid #ccc",
          borderRadius: 2,
          padding: 3,
          maxWidth: 300,
          margin: "0 auto",
          backgroundColor: "#f8f8ff",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {label} (Class Component)
        </Typography>

        <Typography variant="h4" sx={{ margin: 2 }}>
          {count}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained" color="primary" onClick={this.increment}>
            Increment
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.decrement}
          >
            Decrement
          </Button>
          <Button variant="outlined" onClick={this.reset}>
            Reset
          </Button>
        </Box>
      </Box>
    );
  }
}
