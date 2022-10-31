import React from 'react'

const Customerview =({customers,customerId,setCustomerId,setUserInput,updateUser,userInput,handleDelete})=>{
  return (
    <tbody>
            {customers.length ? (
              customers.map((customer) => (
                <tr key={customer.Customer_id}>
                  {customerId !== customer.Customer_id && (
                    <>
                      <td>{customer.Customer_id}</td>
                      <td>{customer.Name}</td>
                      <td> {customer.Email}</td>
                      <td> {customer.Contact}</td>
                      <td> {customer.Gender}</td>
                      <td> {customer.Address}</td>
                      <td>
                        <button
                          className="Button"
                          onClick= {() => handleDelete(customer.Customer_id)}
                        >
                          DELETE
                        </button>
                      </td>
                      <td>
                        <button
                          className="Button"
                          id={customer.Customer_id}
                          onClick={(e) => {
                            setCustomerId(e.target.id);
                            setUserInput({ ...customer});
                          }}
                        >
                          UPDATE
                        </button>
                      </td>
                    </>
                  )}
                  {customerId === customer.Customer_id && (
                    <>
                          <td>
                          {customer.Customer_id}
                          </td>
                          <td>
                            <input
                              type="text"
                              onChange={(e) =>
                                setUserInput({
                                  ...userInput,
                                  Name: e.target.value,
                                })
                              }
                              defaultValue={customer.Name}
                            />
                          </td>
                          <td>
                            <input
                              type="email"
                              onChange={(e) =>
                                setUserInput({
                                  ...userInput,
                                  Email: e.target.value,
                                })
                              }
                              defaultValue={customer.Email}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              onChange={(e) =>
                                setUserInput({
                                  ...userInput,
                                  Contact: e.target.value,
                                })
                              }
                              defaultValue={customer.Contact}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              onChange={(e) =>
                                setUserInput({
                                  ...userInput,
                                  Gender: e.target.value,
                                })
                              }
                              defaultValue={customer.Gender}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              onChange={(e) =>
                                setUserInput({
                                  ...userInput,
                                  Address: e.target.value,
                                })
                              }
                              defaultValue={customer.Address}
                            />
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                updateUser();
                                setCustomerId("");
                              }}
                            >
                              SAVE
                            </button>
                          </td>
                          <td>
                            <button
                              id={customer.Customer_id}
                              onClick={() => setCustomerId("")}
                            >
                              CANCEL
                            </button>
                          </td>
                      </>
                  )}
                </tr>
              ))
            ) : (
              <tr>NO CUSTOMERS FOUND</tr>
            )}
          </tbody>
  )
}

export default Customerview