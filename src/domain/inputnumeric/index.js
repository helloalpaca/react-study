import React, { useState } from 'react';

function InputNumeric() {
  const [weight, setWeight] = useState(0);

  function onChange(e) {
    setWeight(e.target.value);
  }

  function onClick() {
    window.alert('input: ' + weight);
  }

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
            onChange={onChange}
          ></input>
        </div>
        <span className="col align-self-center">kg</span>
      </div>
      <button
        type="button"
        className="btn btn-primary my-4 mx-4"
        onClick={onClick}
      >
        입력하기
      </button>
    </main>
  );
}

export default InputNumeric;
