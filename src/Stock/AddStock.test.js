import { render, screen } from '@testing-library/react';
import AddStock from './AddStock'

jest.mock("axios");
jest.mock('react-router-dom');

describe.skip("Add Stock Testing", () => {
    it('Add Stock Title', () => {
        render(<AddStock />);
        const titleElement = screen.getByRole('title');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent("Add Stock Data");
    });

    it('Add Stock Product name Lable', () => {
        render(<AddStock />);
        const nameElement = screen.getByRole('nameLabel');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent("Product Name");
    });

    it('Add Stock Product name test', () => {
        render(<AddStock />);
        const nameElement = screen.getByRole('name');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toBeEmptyDOMElement();
    });

    it('Add Stock Quantity test', () => {
        render(<AddStock />);
        const quantityElement = screen.getByRole('quantityLabel');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("Available Quantity");
    });

    it('Add Stock Quantity test', () => {
        render(<AddStock />);
        const quantityElement = screen.getByRole('quantity');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("");
    });

    it('Add Stock Total price test', () => {
        render(<AddStock />);
        const totalPriceElement = screen.getByRole('priceLabel');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toHaveTextContent("Price");
    });

    it('Add Stock Total price test', () => {
        render(<AddStock />);
        const totalPriceElement = screen.getByRole('price');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toBeEmptyDOMElement();
    });

    it('Add Stock Submit Button', () => {
        render(<AddStock />);
        const submitButtonElement = screen.getByRole('submitButton');
        expect(submitButtonElement).toBeInTheDocument();
        expect(submitButtonElement).toHaveTextContent("Submit");
    });
})
