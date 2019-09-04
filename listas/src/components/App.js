import React from 'react';
import Metas from './Metas';

class App extends React.Component {

  componentDidMount() {
  }

  render() {
    console.log('PROPS APP', this.props);
    return (
      <div>
        {/* <Tareas /> */}
        <Metas />
      </div>
    )
  }
}

export default App;