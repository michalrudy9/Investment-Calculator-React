import { useState } from "react";

function UserInput() {
  const [userInputData, setUserInputData] = useState({
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 10,
    duration: 10,
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserInputData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            name="initialInvestment"
            onChange={handleInputChange}
            value={userInputData.initialInvestment}
            required
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            name="annualInvestment"
            onChange={handleInputChange}
            value={userInputData.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            name="expectedReturn"
            onChange={handleInputChange}
            value={userInputData.expectedReturn}
            required
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            name="duration"
            onChange={handleInputChange}
            value={userInputData.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
