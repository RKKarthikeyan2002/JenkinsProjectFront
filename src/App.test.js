import { render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('Two Tests', () => {
//   test('renders Hii', () => {
//     render(<App />);
//     const linkElement = screen.getByText('Hii');
//     expect(linkElement).toBeInTheDocument();
//   });
  
//   it.skip('renders Hello Karthikeyan', () => {
//     render(<App />);
//     const linkElement = screen.getByText('Hello Karthikeyan');
//     expect(linkElement).toBeInTheDocument();
//   });
// })

// test('Snapshot test ', () => {
//   render(<App />);
//   const comp = renderer.create(<App />);
//   const tree = comp.toJSON;
//   expect(tree).toMatchSnapshot();
// })
