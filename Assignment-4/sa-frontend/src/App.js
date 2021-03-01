import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import RaisedButton from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Polarity from "./app/components/Polarity";
const style = {
  marginLeft: 12,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: '',
      polarity: undefined
    };
  };
  analyzeSentence() {
    fetch('http://localhost:8080/sentiment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sentence: this.textField.value })
    })
      .then(response => response.json())
      .then(data => this.setState(data));
  }
  analyzeSentenceLocal() {
    fetch('http://localhost:8080/sentiment', {
      method: 'POST', headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sentence: this.textField.getValue() })
    })
    .then(response => response.json())
    .then(data => this.setState(data));
  }
  analyzeSentence() {
    fetch('http://192.168.99.100:8080/sentiment', {
      method: 'POST', headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sentence: this.textField.getValue() })
    })
    .then(response => response.json())
    .then(data => this.setState(data));
  }

  onEnterPress = e => {
    if (e.key === 'Enter') {
      this.analyzeSentence();
    }
  };
  render() {
    const polarityComponent = this.state.polarity !== undefined ?
      <Polarity sentence={this.state.sentence} polarity={this.state.polarity} /> :
      null;
    return (
      <MuiThemeProvider>
        <div className="centerize">
          <Paper zDepth={1} className="content">
            <h2>CSYE 7220 Sentiment Analyser</h2>
            <TextField inputRef={ref => this.textField = ref} onKeyUp={this.onEnterPress.bind(this)}
              hintText="Type your sentence." />
            <RaisedButton variant="contained" style={style} onClick={this.analyzeSentence.bind(this)}>Send</RaisedButton>
            <RaisedButton label="SendLocal" style={style} onClick={this.analyzeSentenceLocal.bind(this)}/>
            {polarityComponent}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;