import React from 'react';
import './App.css';
import DropDown from './components/drop-down/drop-down';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  header: {
    width: '100%',
    height: '50px',
    boxShadow: '0 5px 5px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px'
  }

})

function App() {

  const styles = useStyles();

  return (
    <div className="App">
      <header className={styles.header}>
        create DropDown
      </header>

      <DropDown />

    </div>
  );
}

export default App;
