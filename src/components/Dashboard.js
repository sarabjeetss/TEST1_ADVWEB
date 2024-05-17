import React, { useState } from 'react';
import Transaction from './Transaction';

const Dashboard = () => {

  const [transactions, setTransactions] = useState([]);
  const [nextTransactionId, setNextTransactionId] = useState(1); // To generate unique transaction IDs
  const [formData, setFormData] = useState({
    type: '',
    fromAccount: '',
    toAccount: '',
    amount: 0
  });
  const [accountBalances, setAccountBalances] = useState({});

  const handleTransaction = () => {
    const { type, fromAccount, toAccount, amount } = formData;

    if (type === 'Deposit' && (!fromAccount || amount <= 0)) {
      alert('Please fill out all fields correctly for deposit.');
      return;
    }

    if (type === 'Withdrawal' && (!fromAccount || amount <= 0)) {
      alert('Please fill out all fields correctly for withdrawal.');
      return;
    }

    if (type === 'Transfer' && (!fromAccount || !toAccount || fromAccount === toAccount || amount <= 0)) {
      alert('Please fill out all fields correctly for transfer.');
      return;
    }

    // Create two transactions for transfer: Withdrawal and Deposit
    if (type === 'Transfer') {
      const withdrawalTransaction = {
        transactionId: nextTransactionId,
        type: 'Transfer Withdrawal',
        accountNumber: fromAccount,
        amount,
        timestamp: new Date().toLocaleString()
      };

      const depositTransaction = {
        transactionId: nextTransactionId + 1,
        type: 'Transfer Deposit',
        accountNumber: toAccount,
        amount,
        timestamp: new Date().toLocaleString()
      };

      // Update transactions list with the two new transactions
      setTransactions([...transactions, withdrawalTransaction, depositTransaction]);

      // Update account balances
      const updatedBalances = { ...accountBalances };
      updatedBalances[fromAccount] = {
        ...updatedBalances[fromAccount],
        balance: (updatedBalances[fromAccount]?.balance || 0) - amount
      };
      updatedBalances[toAccount] = {
        ...updatedBalances[toAccount],
        balance: (updatedBalances[toAccount]?.balance || 0) + amount
      };

      setAccountBalances(updatedBalances);
      setNextTransactionId(nextTransactionId + 2);
    } else {
      // Single transaction (Deposit or Withdrawal)
      const newTransaction = {
        transactionId: nextTransactionId,
        type,
        accountNumber: fromAccount,
        amount,
        timestamp: new Date().toLocaleString()
      };

      // Update transactions list
      setTransactions([...transactions, newTransaction]);

      // Update account balance
      const updatedBalances = { ...accountBalances };
      if (type === 'Deposit') {
        updatedBalances[fromAccount] = {
          ...updatedBalances[fromAccount],
          balance: (updatedBalances[fromAccount]?.balance || 0) + amount
        };
      } else if (type === 'Withdrawal') {
        updatedBalances[fromAccount] = {
          ...updatedBalances[fromAccount],
          balance: (updatedBalances[fromAccount]?.balance || 0) - amount
        };
      }

      setAccountBalances(updatedBalances);
      setNextTransactionId(nextTransactionId + 1);
    }

    // Reset form data
    setFormData({ type: '', fromAccount: '', toAccount: '', amount: 0 });
  };




  return (
    <div className="transection-area container mt-5">
      <h2>Transaction</h2>
      <p>Your Transaction will be showing here</p>

      <div className=" mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Bank Transactions</h2>
          <button
            className="themebutton btn btn-primary mr-2"
            onClick={() => setFormData({ type: 'Deposit', fromAccount: '', amount: 0 })}
          >
            Deposit
          </button>
          <button
            className="themebutton btn btn-danger mr-2"
            onClick={() => setFormData({ type: 'Withdrawal', fromAccount: '', amount: 0 })}
          >
            Withdraw
          </button>
          <button
            className="themebutton btn btn-success"
            onClick={() => setFormData({ type: 'Transfer', fromAccount: '', toAccount: '', amount: 0 })}
          >
            Transfer
          </button>
        </div>
      </div>

      {formData.type && (
        <div className="transection-form mt-3">
          <h3>{formData.type} Form</h3>
          {formData.type !== 'Transfer' && (
            <div className="form-group">
              <label>Account Number:</label>
              <input
                type="text"
                className="form-control"
                name="fromAccount"
                value={formData.fromAccount}
                onChange={(e) => setFormData({ ...formData, fromAccount: e.target.value })}
              />
            </div>
          )}
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              className="form-control"
              name="amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
            />
          </div>
          {formData.type === 'Transfer' && (
            <div>
              <div className="form-group">
                <label>From Account:</label>
                <input
                  type="text"
                  className="form-control"
                  name="fromAccount"
                  value={formData.fromAccount}
                  onChange={(e) => setFormData({ ...formData, fromAccount: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>To Account:</label>
                <input
                  type="text"
                  className="form-control"
                  name="toAccount"
                  value={formData.toAccount}
                  onChange={(e) => setFormData({ ...formData, toAccount: e.target.value })}
                />
              </div>
            </div>
          )}
          <br></br>
          <button className="themebutton btn btn-primary" onClick={handleTransaction}>
            {formData.type}
          </button>
        </div>
      )}

      <Transaction transactions={transactions} accountBalances={accountBalances} />
    </div>


    </div>
  );
};

export default Dashboard;
