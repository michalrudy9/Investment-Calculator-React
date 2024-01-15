function UserInput({ inputData, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            name="initialInvestment"
            onChange={onChange}
            value={inputData.initialInvestment}
            required
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            name="annualInvestment"
            onChange={onChange}
            value={inputData.annualInvestment}
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
            onChange={onChange}
            value={inputData.expectedReturn}
            required
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            name="duration"
            onChange={onChange}
            value={inputData.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
