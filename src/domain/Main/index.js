import React, {Component} from 'react';

class Main extends Component{
  render(){
    return (
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Main</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Main</li>
          </ol>
        </div>
      </main>
    );
  }
}

export default Main;
