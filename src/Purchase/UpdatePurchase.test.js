import { render, screen } from '@testing-library/react';
import UpdatePurchase from './UpdatePurchase'

jest.mock("axios");
jest.mock('react-router-dom');

describe.skip("Update Purchase Testing", () => {
    it('Update Purchase Title', () => {
        render(<UpdatePurchase />);
        const titleElement = screen.getByRole('title');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent("Update Passenger Details");
    });

    it('Update Purchase Product name Lable', () => {
        render(<UpdatePurchase />);
        const nameElement = screen.getByRole('nameLabel');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent("Product Name");
    });

    it('Update Purchase Product name test', () => {
        render(<UpdatePurchase />);
        const nameElement = screen.getByRole('name');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent("");
    });

    it('Update Purchase Quantity test', () => {
        render(<UpdatePurchase />);
        const quantityElement = screen.getByRole('quantityLabel');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("Quantity");
    });

    it('Update Purchase Quantity test', () => {
        render(<UpdatePurchase />);
        const quantityElement = screen.getByRole('quantity');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("");
    });

    it('Update Purchase Total price test', () => {
        render(<UpdatePurchase />);
        const totalPriceElement = screen.getByRole('totalLabel');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toHaveTextContent("Total Price:");
    });

    it('Update Purchase Total price test', () => {
        render(<UpdatePurchase />);
        const totalPriceElement = screen.getByRole('totalPrice');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toBeEmptyDOMElement();
    });

    it('Update Purchase Submit Button', () => {
        render(<UpdatePurchase />);
        const submitButtonElement = screen.getByRole('submitButton');
        expect(submitButtonElement).toBeInTheDocument();
        expect(submitButtonElement).toHaveTextContent("Submit");
    });
})
