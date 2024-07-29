import { render, screen } from '@testing-library/react';
import UpdateStock from './UpdateStock'

jest.mock("axios");
jest.mock('react-router-dom');

describe.skip("Update Stock Testing", () => {
    it('Update Stock Title', () => {
        render(<UpdateStock />);
        const titleElement = screen.getByRole('title');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent("Update Stock Details");
    });

    it('Update Stock Product name Lable', () => {
        render(<UpdateStock />);
        const nameElement = screen.getByRole('nameLabel');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent("Product Name");
    });

    it('Update Stock Product name test', () => {
        render(<UpdateStock />);
        const nameElement = screen.getByRole('name');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toBeEmptyDOMElement();
    });

    it('Update Stock Quantity test', () => {
        render(<UpdateStock />);
        const quantityElement = screen.getByRole('quantityLabel');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("Available Quantity");
    });

    it('Update Stock Quantity test', () => {
        render(<UpdateStock />);
        const quantityElement = screen.getByRole('quantity');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("");
    });

    it('Update Stock Total price test', () => {
        render(<UpdateStock />);
        const totalPriceElement = screen.getByRole('priceLabel');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toHaveTextContent("Price");
    });

    it('Update Stock Total price test', () => {
        render(<UpdateStock />);
        const totalPriceElement = screen.getByRole('price');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toBeEmptyDOMElement();
    });

    it('Update Stock Submit Button', () => {
        render(<UpdateStock />);
        const submitButtonElement = screen.getByRole('submitButton');
        expect(submitButtonElement).toBeInTheDocument();
        expect(submitButtonElement).toHaveTextContent("Submit");
    });
})
