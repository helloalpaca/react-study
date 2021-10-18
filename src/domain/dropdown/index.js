import React, {Component} from 'react';

class Order extends Component {
  
  constructor() {
    super();

    this.state = {
      dropDownValue: "Select an item"
    }
  }

  changeValue(text) {
    this.setState({ dropDownValue: text })
  }
  
  render(){
    return (
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">DropDown</h1>
        </div>
  
          <div className="dropdown mx-4 mt-4">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {this.state.dropDownValue}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" onClick={(e) => this.changeValue(e.target.textContent)}>
                  안녕
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={(e) => this.changeValue(e.target.textContent)}>
                  하세요
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={(e) => this.changeValue(e.target.textContent)}>
                  반갑
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={(e) => this.changeValue(e.target.textContent)}>
                  습니다
                </a>
              </li>
            </ul>
          </div>
      </main>
    );
  }
  
}

export default Order;
