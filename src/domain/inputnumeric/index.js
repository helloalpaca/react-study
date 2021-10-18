import React, {Component} from 'react';

class InputNumeric extends Component {

  constructor() {
    super();

    this.state = {
      weight: 0
    }
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    this.setState({
      weight: e.target.value
    });
  }

  onClick(){
    window.alert('input: '+this.state.weight);
  }

  render(){
    return (
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Input Numeric</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Input Numeric</li>
          </ol>
        </div>
        <div className="row">
          <div className="col-4 mx-4">
            <input
              className="form-control form-control-lg"
              type="nunmber"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="무게를 입력해주세요"
              aria-label=".form-control-lg example"
              onChange={this.onChange.bind(this)}
            ></input>
          </div>
          <span className="col align-self-center">kg</span>
        </div>
        <button type="button" className="btn btn-primary my-4 mx-4" onClick={this.onClick}>
          입력하기
        </button>
      </main>
    );
  }
}

export default InputNumeric;
