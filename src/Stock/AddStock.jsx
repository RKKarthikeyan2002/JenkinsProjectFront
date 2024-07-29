import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddStock.css'; // Import custom CSS for styling

function AddStock() {
    const [inputData, setInputData] = useState({
        productName: '',
        quantity: '',
        price: '',
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateValues(inputData);

        if (isValid) {
            axios.post("http://localhost:8080/stock", inputData)
                .then((res) => {
                    alert("Stock added successfully");
                    navigate('/viewStock');
                })
                .catch((err) => console.log(err));
        }
    };

    const validateValues = (inputData) => {
        if (inputData.productName.trim() === '') {
            alert("Please enter Product Name");
            return false;
        } else if (inputData.quantity.trim() === '') {
            alert("Please enter Available Quantity");
            return false;
        } else if (inputData.price.trim() === '') {
            alert("Please enter Product Price");
            return false;
        } else if (isNaN(inputData.quantity) || isNaN(inputData.price)) {
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
                        { label: "Product Name", name: "productName", type: "text", role: "name"},
                        { label: "Available Quantity", name: "quantity", type: "number", role: "quantity" },
                        { label: "Price", name: "price", type: "number", role: "price" },
                    ].map(({ label, name, type, role }) => (
                        <div className="mb-3" key={name}>
                            <label htmlFor={name} className="form-label" role={`${role}Label`}>{label}:</label>
                            <input
                                type={type}
                                name={name}
                                className="form-control"
                                value={inputData[name]}
                                role={role}
                                onChange={(e) => setInputData({ ...inputData, [name]: e.target.value })}
                            />
                        </div>
                    ))}

                    <Button type="submit" className="btn-info w-100" name="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default AddStock;
