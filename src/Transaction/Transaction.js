import React, { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");
  const [rebuy, setRebuy] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onAddTransaction({ name, price, category, date, memo, rebuy });
    setName("");
    setPrice("");
    setCategory("");
    setDate("");
    setMemo("");
    setRebuy("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>이름</label>
        <input type="text" value={name} />
      </div>
      <div>
        <label>금액</label>
        <input type="number" value={price} />
      </div>
      <div>
        <label>가격</label>
        <input type="number" value={price} />
      </div>
      <div>
        <label>유형</label>
        <input type="text" value={category} />
      </div>
      <div>
        <label>구입날짜</label>
        <input type="date" value={date} />
      </div>
      <div>
        <label>메모</label>
        <input type="text" value={memo} />
      </div>
      <div>
        <label>재구매의사</label>
        <input type="boolean" value={rebuy} />
      </div>
      <button type="submit">입력!</button>
    </form>
  );
}

export default TransactionForm;
