import { render, screen } from '@testing-library/react';
import ViewPurchase from './ViewPurchase';

jest.mock("axios");
jest.mock('react-router-dom');

describe.skip("View Purchase Testing", () => {

    test('View Purchase Quantity test', () => {
        render(<ViewPurchase />);
        const productNoElement = screen.getByRole('productNo');
        expect(productNoElement).toBeInTheDocument();
        expect(productNoElement).toHaveTextContent("Product No:");
    });

    test('View Purchase Name test', () => {
        render(<ViewPurchase />);
        const nameElement = screen.getByRole('name');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent("Name");
    });

    test('View Purchase Quantity test', () => {
        render(<ViewPurchase />);
        const quantityElement = screen.getByRole('quantity');
        expect(quantityElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent("Quantity");
    });

    test('View Purchase Total price test', () => {
        render(<ViewPurchase />);
        const totalPriceElement = screen.getByRole('totalPrice');
        expect(totalPriceElement).toBeInTheDocument();
        expect(totalPriceElement).toHaveTextContent("Total Price");
    });

    test('View Purchase Action test', () => {
        render(<ViewPurchase />);
        const actionElement = screen.getByRole('action');
        expect(actionElement).toBeInTheDocument();
        expect(actionElement).toHaveTextContent("Action");
    });

})

