import React from 'react';

// retrieve some functions from the React Testing Library
import { render, cleanup } from '@testing-library/react';

// import the extend-expect library from the jest-dom package.
import '@testing-library/jest-dom/extend-expect';

//  import the component we will be testing, which is the About component.
import About from '..';

//  call the cleanup function using the afterEach global function from Jest:
afterEach(cleanup);

// declare the component we're testing
describe('About component', () => {
    // First Test  to verify that the component is rendering.
    it('renders', () => {
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About using asFragment function, which returns a snapshot 
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });

})

