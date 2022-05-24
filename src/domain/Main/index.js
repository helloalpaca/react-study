import React from 'react';

function Main() {
  let name = undefined;

  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Main</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Main</li>
        </ol>
      </div>
      <div>{name || 'UNDEFINED임'}</div>
    </main>

  );
}

export default Main;
