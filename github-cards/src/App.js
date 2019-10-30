import React from 'react';
import './App.css';
import axios from 'axios';
import MyGitCard from './Components/MyGitCard';
import MyFollowers from './Components/MyFollowers';

class App extends React.Component {
  state = {
    myCard: {},
    myFollowers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/chards79")
      .then(res => {
        console.log(res);
        this.setState({
          myCard: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/chards79/followers")
      .then(res => {
        console.log(res.data);
        this.setState({
          myFollowers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>My Github Profile</h1>
        <div className="chards79">
          <MyGitCard myCard={this.state.myCard} />
          <h2>My Followers</h2>
          <MyFollowers myFollowers={this.state.myFollowers} />
        </div>

      </div>
    );
  }
}

export default App;
