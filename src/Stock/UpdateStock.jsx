import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStock() {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const naviget = useNavigate();

    useEffect(() => {
      axios
        .get("http://localhost:8080/stock/getStock/" + id)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
    }, []);

    let handleSubmit = (e) => {
      e.preventDefault();
      let result = validateValues(data);
      // setSubmitting(true);
  
      if (result === true) {
        axios
          .put("http://localhost:8080/stock", data)
          .then((res) => {
              alert("Stock Details Updated Successfully");
            console.log(res.data);
            console.log(data);
            naviget(`/viewStock`);
          })
          .catch((err) => console.log(err));
      }
    };
  
    // validation Part for add user for student management system
    // const [errors, setErrors] = useState({});
    // const [submitting, setSubmitting] = useState(false);
  
    const validateValues = (inputData) => {
      if (inputData.productName.trim() === '') {
          alert("Please enter Product Name");
          return false;
      } else if (inputData.quantity === '') {
          alert("Please enter Available Quantity");
          return false;
      } else if (inputData.price === '') {
          alert("Please enter Product Price");
          return false;
      } else if (isNaN(inputData.quantity) || isNaN(inputData.price)) {
          alert("Quantity and Price should be numeric values");
          return false;
      }
      return true;
  };

return (
  <div
    id="add2"
    className="d-flex w-100 vh-100 justify-content-center align-items-center"
    >
    <div className="card w-50 p-5">
        <form onSubmit={handleSubmit}>
        <h1 className="text-center mb-4" role='title'>Update Stock Details</h1>

        {[
            { label: "Product Name", name: "productName", type: "text", role: "name"},
            { label: "Available Quantity", name: "quantity", type: "number", role: "quantity" },
            { label: "Price", name: "price", type: "number", role: "price" },
        ].map(({ label, name, type, options, role }) => (
            <div className="mb-3" key={name}>
            <label htmlFor={name} className="form-label" role={`${role}Label`}>
                {label}:
            </label>
            {type === "select" ? (
                <select
                name={name}
                className="form-select"
                value={data[name]}
                role={role}
                onChange={(e) =>
                    setData({ ...data, [name]: e.target.value })
                }
                >
                <option value="">{label}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
                </select>
            ) : (
                <input
                type={type}
                name={name}
                value={data[name]}
                className="form-control"
                role={role}
                onChange={(e) =>
                    setData({ ...data, [name]: e.target.value })
                }
                disabled={name === 'id'} // Disable if name is 'id'
                />
            )}
            </div>
        ))}

        <button className="btn btn-info w-100" role='submitButton' name='submit'>Submit</button>
        </form>
    </div>
  </div>
  )
}

export default UpdateStock
