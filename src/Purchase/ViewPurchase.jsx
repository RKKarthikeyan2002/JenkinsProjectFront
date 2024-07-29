import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import './ViewPurchase.css'; // Import custom CSS for styling

function ViewPurchase() {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    const [search, setSearchData] = useState('');

    useEffect(() => {
        axios
            .get("http://localhost:8080/purchase/all")
            .then((response) => {
                setRecords(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Do you want to delete?");
        if (confirmDelete) {
            axios
                .delete(`http://localhost:8080/purchase/${id}`)
                .then((res) => {
                    alert("Record deleted successfully");
                    navigate("/viewPurchase");
                })
                .catch((err) => console.log(err));
        }
    };

    const handleChange = (e) => {
        setSearchData(e.target.value);
    };

    return (
        <div id="body" className="container py-5">
            <div className="text-end mb-3 d-flex justify-content-between align-items-center">
                <Form inline>
                    <Form.Control
                        type="text"
                        placeholder="Search by Name"
                        className="mr-sm-2"
                        onChange={handleChange}
                    />
                </Form>
                <Link to="/addPurchase" className="btn btn-primary ms-2">
                    Add Purchase<FontAwesomeIcon icon={faPlus} className="ms-1" />
                </Link>
            </div>

            <Table responsive hover striped bordered className="w-100">
                <thead className="table-success">
                    <tr>
                        <th role='productNo'>Product No:</th>
                        <th role='name'>Name</th>
                        <th role='quantity'>Quantity</th>
                        <th role='totalPrice'>Total Price</th>
                        <th role='action'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.filter((d) => {
                        return search.toLowerCase() === '' ? d : d.productName.toLowerCase().includes(search.toLowerCase());
                    }).map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.productName}</td>
                            <td>{d.quantity}</td>
                            <td>{d.totalPrice}</td>
                            <td>
                                <Link to={`/${d.id}/updatePurchase`} className="btn btn-success me-1" id={`update${d.id}`}>
                                    <FontAwesomeIcon icon={faEdit} /> Update
                                </Link>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(d.id)} name={`delete${d.id}`}>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewPurchase
