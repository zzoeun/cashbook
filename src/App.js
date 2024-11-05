import "./App.css";
import React, { useState } from "react";
import TransactionForm from "./Transaction/Transaction";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addTransactionHandler = (transaction) => {
    setExpenses((prevExpenses) => [transaction, ...prevExpenses]);
  };

  return (
    <div>
      <h1>CACHBOOK</h1>
      <TransactionForm onAddTransaction={addTransactionHandler} />
    </div>
  );
}

export default App;
