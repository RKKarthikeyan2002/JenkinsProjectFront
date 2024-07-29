import { render, screen } from '@testing-library/react';
import AddPurchase from './AddPurchase'

jest.mock("axios");
jest.mock('react-router-dom');

describe.skip("Add Purchase Testing", () => {
    it('Add Purchase Title', () => {
        render(<AddPurchase />);
        const titleElement = screen.getByRole('title');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent("Add Stock Data");
    });

    it('Add Purchase Product name Lable', () => {
        render(<AddPurchase />);
        const nameElement = screen.getByRole('nameLabel');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent("Product Name");
    });

    it('Add Purchase Product name test', () => {
        render(<AddPurchase />);
        const nameElement = screen.getByRole('name');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent("Product Name");
    });

    it('Add Purchase Quantity test', () => {
        render(<AddPurchase />);
        const quantityElement = screen.getByRole('quantityLabel');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("Quantity");
    });

    it('Add Purchase Quantity test', () => {
        render(<AddPurchase />);
        const quantityElement = screen.getByRole('quantity');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("");
    });

    it('Add Purchase Total price test', () => {
        render(<AddPurchase />);
        const totalPriceElement = screen.getByRole('totalLabel');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toHaveTextContent("Total Price:");
    });

    it('Add Purchase Total price test', () => {
        render(<AddPurchase />);
        const totalPriceElement = screen.getByRole('totalPrice');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toBeEmptyDOMElement();
    });

    it('Add Purchase Submit Button', () => {
        render(<AddPurchase />);
        const submitButtonElement = screen.getByRole('submitButton');
        expect(submitButtonElement).toBeInTheDocument();
        expect(submitButtonElement).toHaveTextContent("Submit");
    });
})
