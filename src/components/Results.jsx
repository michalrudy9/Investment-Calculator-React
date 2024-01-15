import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ inputData }) {
  const calculateInvestment = calculateInvestmentResults(inputData);
  const initialInvestment =
    calculateInvestment[0].valueEndOfYear -
    calculateInvestment[0].interest -
    calculateInvestment[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {calculateInvestment.map((listItem) => {
          const totalInterest =
            listItem.valueEndOfYear -
            listItem.annualInvestment * listItem.year -
            initialInvestment;
          const totalAmountInvestment = listItem.valueEndOfYear - totalInterest;
          return (
            <tr key={listItem.year}>
              <td>{listItem.year}</td>
              <td>{formatter.format(listItem.valueEndOfYear)}</td>
              <td>{formatter.format(listItem.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
