import React from 'react';

function Button(props) {
  return (
    <div className="text-center">
      <button type="button" className="btn btn-dark" onClick={props.onClick}>
        Dark
      </button>
    </div>
  );
}

export default Button;
