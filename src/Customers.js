import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Customerview from "./Customerview";
import Table from "./Table";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [popup, setPopup] = useState({
    show: false, 
    id: '',
  });
  const [userInput, setUserInput] = useState({
    Customer_id: "",
    Name: "",
    Contact: "",
    Email: "",
    Gender: "",
    Address: "",
  });

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const updateUser = async() => {
    try
    {
    fetch(
      `${process.env.REACT_APP_ANURL}/customer/updateCustomer/${userInput.Customer_id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ ...userInput }),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(async(response) => {await fetchCustomerData(); response.json()});
    }
    catch(error){
      alert("Cannot Update")
    }
    
  };

  const fetchCustomerData = async () => {
    try{
    const CustomerData = await fetch(
      `${process.env.REACT_APP_ANURL}/customer/displayCustomers`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((response) => response.json());
    setCustomers(CustomerData);
    }
    catch(error)
    {
      alert("Cannot Fetch Data")
    }
  };

  const deleteCustomer = async (id) => {
    try{
    await fetch(`${process.env.REACT_APP_ANURL}/customer/deleteCustomer/${id}`, {
      method: "DELETE",
    });
    setPopup({
      show: false,
      id: '',});
    await fetchCustomerData();
    }
    catch(error)
    {
      alert("Cannot Delete")
    }
    
  };

  const handleDelete = async(customer_id) => {
    setPopup({
      show: true,
      id: customer_id,
    });
  };
  
  const cancelDeletion = async() => {
    setPopup({
      show: false,
      id: '',
    });
  };

  
  return (
    <div>
      <h1>CUSTOMER DETAILS PAGE</h1>
      <Link to="/insertCustomer">
        <button className="Insert-Button">INSERT CUSTOMER</button>
      </Link>
      <div className="Body">
        <table>
          <Table/>
          <Customerview
            customers={customers}
            customerId={customerId}
            setCustomerId={setCustomerId}
            setUserInput={setUserInput}
            deleteCustomer={deleteCustomer}
            updateUser={updateUser}
            userInput={userInput}
            handleDelete={handleDelete}
          />
        </table>
        {popup.show === true && (
          <>
        <div className="popupContainer">
          <p>Are you sure you want to delete {popup.id}?</p>
          <button onClick = { () => cancelDeletion()} >CANCEL</button>
          <button onClick ={() => deleteCustomer(popup.id)}>CONFIRM</button>
        </div>
      </>
          )}
      </div>
    </div>
  );
};
export default Customers;
