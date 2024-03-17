// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('@splinetool/react-spline', () => {
    // Mock the component or the specific exports of the module
    return {
      __esModule: true, // this property makes it work as an ES module
      default: () => 'MockedSpline', // Adjust this to match the expected usage in your tests
      // Add other named exports if needed
    };
  });
  