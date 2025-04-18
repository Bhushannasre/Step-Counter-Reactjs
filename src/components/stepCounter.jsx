import React, { useState } from 'react';


const StepCounter = () => {
  const [step, setStep] = useState(0);
  const [history, setHistory] = useState([0]);

  const Increment = () => {
    const newStep = step + 1;
    setStep(newStep);
    setHistory([...history, newStep]);
  };

  const Decrement = () => {
    const newStep = step > 0 ? step - 1 : 0;
    setStep(newStep);
    setHistory([...history, newStep]);
  };

  const Reset = () => {
    setStep(0);
    setHistory([...history, 0]);
  };

  const Undo = () => {
    if (history.length > 1) {
      const updatedHistory = [...history];
      updatedHistory.pop();
      const lastStep = updatedHistory[updatedHistory.length - 1];
      setStep(lastStep);
      setHistory(updatedHistory);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center border p-4 rounded shadow bg-light w-100" style={{ maxWidth: '500px', maxHeight: '80vh', overflow: 'hidden' }}>
        <h1>Step Counter</h1>
        <p className="fs-4">Current Step: {step}</p>

        <div className="d-flex justify-content-center gap-2 flex-wrap mb-3">
          <button className="btn btn-success" onClick={Increment}>➕ Increment</button>
          <button className="btn btn-warning" onClick={Decrement}>➖ Decrement</button>
          <button className="btn btn-danger" onClick={Reset}>🔁 Reset</button>
          <button className="btn btn-secondary" onClick={Undo} disabled={history.length <= 1}>↩️ Undo</button>
        </div>

        <h5 className="mt-3">History:</h5>
        <div className="overflow-auto" style={{ maxHeight: '200px' }}>
          <ul className="list-group">
            {history.map((item, index) => (
              <li className="list-group-item" key={index}>
                Step {index}: {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StepCounter;
