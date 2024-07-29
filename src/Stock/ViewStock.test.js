import { render, screen } from '@testing-library/react';
import ViewStock from './ViewStock';

jest.mock("axios");
jest.mock('react-router-dom');

describe("View Stock Testing", () => {

    test('View Stock Quantity test', () => {
        render(<ViewStock />);
        const stockNoNoElement = screen.getByRole('stockNo');
        expect(stockNoNoElement).toBeInTheDocument();
        expect(stockNoNoElement).toHaveTextContent("Stock No:");
    });

    // test('View Stock Name test', () => {
    //     render(<ViewStock />);
    //     const nameElement = screen.getByRole('name');
    //     expect(nameElement).toBeInTheDocument();
    //     expect(nameElement).toHaveTextContent("Name");
    // });

    // test('View Stock Quantity test', () => {
    //     render(<ViewStock />);
    //     const quantityElement = screen.getByRole('quantity');
    //     expect(quantityElement).toBeInTheDocument();
    //     expect(quantityElement).toHaveTextContent("Available Quantity");
    // });

    test('View Stock Total price test', () => {
        render(<ViewStock />);
        const priceElement = screen.getByRole('price');
        expect(priceElement).toBeInTheDocument();
        expect(priceElement).toHaveTextContent("Price");
    });

    test('View Stock Action test', () => {
        render(<ViewStock />);
        const actionElement = screen.getByRole('action');
        expect(actionElement).toBeInTheDocument();
        expect(actionElement).toHaveTextContent("Action");
    });

})

