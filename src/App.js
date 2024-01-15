import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
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
        [name]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputData={userInputData} onChange={handleInputChange} />
      <Results inputData={userInputData} />
    </>
  );
}

export default App;
