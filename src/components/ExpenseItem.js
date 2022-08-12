import React, { Component } from "react";
import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 01 2000</div>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">100</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
