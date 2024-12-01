import React, { useState } from 'react';

const BMICalculator = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();
    const heightInMeters = height / 100; // Convert height to meters
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(2));

    // Set message based on BMI value
    if (calculatedBMI < 18.5) {
      setMessage('Underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setMessage('Normal weight');
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setMessage('Overweight');
    } else {
      setMessage('Obesity');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Your Gender</label>
          <select
            id="gender"
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">Height (cm)</label>
          <input
            type="number"
            className="form-control"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Calculate BMI</button>
      </form>

      {bmi && (
        <div className="mt-4 text-center">
          <h4>Your BMI: {bmi}</h4>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;