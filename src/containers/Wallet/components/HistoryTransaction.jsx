import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./HistoryTransaction.scss";
import transactionApi from "../../../apis/transactionApi";

import "./TransactionTable.scss";

function HistoryTransaction() {
  const [transaction, setTransaction] = useState([]);
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const [time, setTime] = useState("all");
  var transFilter = [];
  useEffect(() => {
    const fetchTransaction = async () => {
      const transactionList = await transactionApi.getAll();
      setTransaction(transactionList);
    };
    fetchTransaction();
  }, []);

  const filteredDates1 = transaction.filter(
    (d) =>
      new Date() - new Date(d.completedDate) < 86400000 &&
      new Date() - new Date(d.completedDate) > 0
  );
  const filteredDates7 = transaction.filter(
    (d) =>
      new Date() - new Date(d.completedDate) < 604800000 &&
      new Date() - new Date(d.completedDate) > 0
  );
  const filteredDates30 = transaction.filter(
    (d) =>
      new Date() - new Date(d.completedDate) < 2592000000 &&
      new Date() - new Date(d.completedDate) > 0
  );

  //   State Filter

  if (time === "all") {
    transFilter = transaction.filter((result) => {
      if (status === "all" && type === "all") {
        return result;
      } else if (type === "all") {
        return result.status === status;
      } else if (status === "all") {
        return result.type === type;
      } else return result.type === type && result.status === status;
    });
  } else if (time === "oneday") {
    transFilter = filteredDates1.filter((result) => {
      if (status === "all" && type === "all") {
        return result;
      } else if (type === "all") {
        return result.status === status;
      } else if (status === "all") {
        return result.type === type;
      } else return result.type === type && result.status === status;
    });
  } else if (time === "sevenday") {
    transFilter = filteredDates7.filter((result) => {
      if (status === "all" && type === "all") {
        return result;
      } else if (type === "all") {
        return result.status === status;
      } else if (status === "all") {
        return result.type === type;
      } else return result.type === type && result.status === status;
    });
  } else if (time === "thirtyday") {
    transFilter = filteredDates30.filter((result) => {
      if (status === "all" && type === "all") {
        return result;
      } else if (type === "all") {
        return result.status === status;
      } else if (status === "all") {
        return result.type === type;
      } else return result.type === type && result.status === status;
    });
  }

  return (
    <div className="transaction-page">
      <div className="header">
        <h2>Transaction History</h2>
        <div className="crypto">Crypto</div>
      </div>
      <div className="filter">
        <div className="box filter-type">
          <label htmlFor="">Type</label>
          <select name="" id="" onChange={(e) => setType(e.target.value)}>
            <option value="all">All</option>
            <option value="DEPOSIT">Deposit</option>
            <option value="WITHDRAW">Withdraw</option>
          </select>
        </div>
        <div className="box filter-time">
          <label htmlFor="">Time</label>
          <select name="" id="" onChange={(e) => setTime(e.target.value)}>
            <option value="all">All</option>
            <option value="oneday">Past 1 day</option>
            <option value="sevenday">Past 7 days</option>
            <option value="thirtyday">Past 30 days</option>
          </select>
        </div>
        <div className="box filter-asset">
          <label htmlFor="">Asset</label>
          <select name="" id="">
            <option value="usdt">USDT</option>
          </select>
        </div>
        <div className="box filter-status">
          <label htmlFor="">Status</label>
          <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="COMPLETED">Completed</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>
      </div>
      <div className="export">
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        <label htmlFor="">Export History</label>
      </div>

      <div className="transaction-table">
        <div className="transaction-table_header">
          <div className="col-time">Time</div>
          <div className="col-type">Type</div>
          <div className="col-withdraw">Withdraw wallet</div>
          <div className="col-asset">Asset</div>
          <div className="col-amount">Amount</div>
          <div className="col-destination">Destination</div>
          <div className="col-TxID">TxID</div>
          <div className="col-status">Status</div>
        </div>
        {transFilter?.map((trans, index) => (
          <div key={index} className="transaction-table_body">
            <div className="col-time-body">{trans.completedDate}</div>

            <div className="col-type-body">{trans.type}</div>
            <div className="col-withdraw-body">Withdraw wallet</div>
            <div className="col-asset-body">USDT</div>
            <div className="col-amount-body">{trans.amount}</div>
            <div className="col-destination-body">
              {trans.toAddr.slice(0, 4) + "..." + trans.toAddr.slice(-4)}
            </div>
            <div className="col-TxID-body">
              {trans.fromAddr === "Unknown"
                ? "Unknown"
                : trans.fromAddr.slice(0, 4) + "..." + trans.fromAddr.slice(-4)}
            </div>
            <div className="col-status-body">{trans.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryTransaction;
