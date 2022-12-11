import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Please Log In</p>
        <div>
          <form action="/index.php">
            <label>Username</label>
            <input type="text" id="uname" name="username" placeholder="Your username.." />

            <label>Password</label>
            <input type="password" id="pword" name="password" placeholder="Your password.." />

            <p><input type="submit" value="Submit" /></p>
            <p><input type="button" value="Register instead?" /></p>
          </form>

          <p>Tous les Posts</p>
          <div>
            <figure>
              <blockquote>
                UMMM jai mangé un super poisson
              </blockquote>
              <figcaption>-miaoupi, <cite>Paris, 10H</cite></figcaption>
            </figure>

            <figure>
              <blockquote>
                je pense que j'ai trop rigolé c'était un super spectacle
              </blockquote>
              <figcaption>-twonii56, <cite>Paris, 22H45</cite></figcaption>
            </figure>

          </div>

        </div>
      </div>
    );
  }
}

export default App;