import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score"
import friends from "./friends.json";
import "./App.css";
let score = 0;
let chosen = [];
class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score
  };

  shuffleFriends = (array) => {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  chooseFriend = id => {
    let choice = this.state.friends.filter(friend => friend.id === id);
    choice = choice[0];
    
    // console.log(chosen);
    // console.log(chosen.indexOf(choice.name));

    // console.log(chosen.map(function (e) { return e.name; }).indexOf(choice.name))
    
    if (chosen.map(function (e) { return e.name; }).indexOf(choice.name) === -1) {
      this.setState({ friends: this.shuffleFriends(friends) });
      console.log('another point!');
      score++;
      chosen.push(choice);
    } else {
      alert('You lose');
      this.setState({ friends: this.shuffleFriends(friends) });
      score = 0;
      this.setState({ score });
      
      chosen = [];
    }
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <Score
          score={score} />
        {this.state.friends.map(friend => (
          <FriendCard
            chooseFriend={this.chooseFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
