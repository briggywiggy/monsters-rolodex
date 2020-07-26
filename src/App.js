import React from 'react';
import './App.css';
import './styles/styles.scss'
import { CardList } from './components/CardList/CardList.component';
import { CardListFilters } from './components/CardListFilters/CardListFilters.component';
import selectMonsters from './selectors/monsters.selector';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }
  handleOnChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = selectMonsters(monsters, searchField);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <CardListFilters
        placeholder="Search monsters"
        handleOnChange={this.handleOnChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
