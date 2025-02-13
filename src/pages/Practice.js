import React from 'react';

const Practice = () => {
  return (
    <div>
      <h3 className="mb-3">Практика</h3>
        <div className="card mb-3" style={{background: '#ECF3F4', color: '#203864', maxWidth: '1200px' }}>
          <div className="card-body">
            <h5 className="card-title">Example Problem</h5>
            <p className="card-text">
              On a table are two stacks of coins, each containing two coins. On each turn, a player may remove any number of coins from one stack. The player who cannot make a move loses. Who wins with the correct strategy?
            </p>
            <button
              className="btn btn-primary me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#exampleSolution"
              aria-expanded="false"
              aria-controls="exampleSolution"
              style={{background: '#BDD7EE', color: '#203864', borderColor: 'white'}}
            >
              Решение
            </button>
            <div className="collapse mt-3" id="exampleSolution">
              <p className="text-success">
                The second player always wins with the correct strategy.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Practice;
