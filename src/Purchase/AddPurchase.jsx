import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './AddPurchase.css'; // Import custom CSS for styling

function AddPurchase() {
    const [inputData, setInputData] = useState({
        productName: '',
        quantity: '',
        totalPrice: '',
        stock: {
            productName: '',
            quantity: '',
            price: '',
        }
    });

    const [productName, setProductName] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get("http://localhost:8080/stock/productname")
          .then((response) => {
            setProductName(response.data);
            console.log(response.data);
          })
      }, []);

      const handleChange = (e) => {
        axios
          .get("http://localhost:8080/stock/" + e.target.value)
          .then((response) => {
            setInputData((inputData) => ({
              ...inputData,
              stock: response.data
            }));
            setInputData((inputData) => ({
                ...inputData,
                productName: response.data.productName
              }));
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateValues(inputData);

        if (isValid) {
            axios.post("http://localhost:8080/purchase", inputData)
                .then((res) => {
                    alert("Stock Purchased successfully");
                    navigate('/viewPurchase');
                })
                .catch((err) => console.log(err));
        }
    };

    const validateValues = (inputData) => {
        if (inputData.productName.trim() === '') {
            alert("Please select Product Name");
            return false;
        } else if (inputData.quantity.trim() === '') {
            alert("Please enter Available Quantity");
            return false;
        } else if (inputData.totalPrice.trim() === '') {
            alert("Please enter Product Price");
            return false;
        } else if (isNaN(inputData.quantity) || isNaN(inputData.totalPrice)) {
            alert("Quantity and Price should be numeric values");
            return false;
        }
        return true;
    };

    return (
        <div className="add-stock-container">
            <div className="card">
                <form onSubmit={handleSubmit} className="p-5">
                    <h1 className="text-center mb-4" role='title'>Add Stock Data</h1>

                    {[
                        { label: "Product Name", name: "productName", type: "select", options: productName, role: "name"},
                        { label: "Quantity", name: "quantity", type: "number", role: "quantity"},
                    ].map(({ label, name, type, options, role }) => (
                        <div className="mb-3" key={name}>
                            <label htmlFor={name} className="form-label" role={`${role}Label`}>{label}:</label>
                            {type === "select" ? (
                                <select
                                name={name}
                                className="form-select"
                                onChange={(e) =>
                                    handleChange(e)
                                }
                                role={role}
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
                                className="form-control"
                                role={role}
                                onChange={(e) =>
                                    setInputData({ ...inputData, [name]: e.target.value })
                                }
                                />
                            )}
                        </div>
                    ))}
                    <div className='mb-3'>
                        <label htmlFor="totalPrice" className="form-label" role='totalLabel'>Total Price:</label>
                        <input
                            type="number"
                            name="totalPrice"
                            className="form-control"
                            role='totalPrice'
                            value={parseInt(inputData.stock.price) * parseInt(inputData.quantity)}
                            onBlur={(e) => setInputData({ ...inputData, totalPrice: e.target.value })}
                            
                        />
                    </div>

                    <Button type="submit" className="btn-info w-100" role='submitButton' name='submit'>Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default AddPurchase;
