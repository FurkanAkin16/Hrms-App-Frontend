import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi />
        <Container className='main'>
          <Dashboard />
        </Container>
      </header>
    </div>
  );
}

export default App;
