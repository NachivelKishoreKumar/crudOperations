import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import validate from "./validate";
//import {Link} from 'react-router-dom'
const FormInput = () => {
  let history = useHistory();
  const [formInputData, setformInputData] = useState({
    Customer_id: "",
    Name: "",
    Contact: "",
    Email: "",
    Gender: "",
    Address: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...formInputData }),
  };

  const insertCustomer = async () => {
    try {
      //console.log(validate({...formInputData}))
      const errorsFromForm = validate({ ...formInputData });
      setErrors(errorsFromForm);
      if (Object.keys(errorsFromForm).length !== 0) {
        return;
      } else {
        await fetch(
          `${process.env.REACT_APP_ANURL}/customer/signUp`,
          requestOptions
        ).then(async (response) => {
          response.json();
          history.push("/");
        });
      }
    } catch {
      alert("Cannot Insert");
    }
  };

  return (
    <div>
      <h1>CUSTOMER SIGNUP PAGE</h1>
      <div className="Signup-Form">
        <table>
          <tbody>
            <tr>
              <td>Customer_id</td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setformInputData({
                      ...formInputData,
                      Customer_id: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Name </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setformInputData({ ...formInputData, Name: e.target.value })
                  }
                />
                <br />
                {errors.Name}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Contact</td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setformInputData({
                      ...formInputData,
                      Contact: e.target.value,
                    })
                  }
                /><br/>
                {errors.Contact}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setformInputData({
                      ...formInputData,
                      Email: e.target.value,
                    })
                  }
                />
                <br/>
                {errors.Email}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  onChange={() =>
                    setformInputData({ ...formInputData, Gender: "M" })
                  }
                />
                Male <br />
                <input
                  type="radio"
                  name="gender"
                  onChange={() =>
                    setformInputData({ ...formInputData, Gender: "F" })
                  }
                />
                Female <br />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setformInputData({
                      ...formInputData,
                      Address: e.target.value,
                    })
                  }
                /><br/>
                {errors.Address}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  onChange={(e) =>
                    setformInputData({
                      ...formInputData,
                      Password: e.target.value,
                    })
                  }
                />
                <br/>
                {errors.Password}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />

        <button className="Button" onClick={insertCustomer}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};
export default FormInput;
