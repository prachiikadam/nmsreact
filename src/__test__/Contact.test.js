
import {screen,render} from '@testing-library/react'

import Contact from '../components/Contact'
import "@testing-library/jest-dom";

test('Should contact us page load',()=>{
    render(<Contact/>)
    
    //const heading = screen.getByRole("div")
    //Assertion meaning
    // expect(heading).toBeInTheDocument()

    const text =  screen.getByText("Contact")
    expect(text).toBeInTheDocument()

})

test('Should be two input elemets',()=>{
    render(<Contact/>)
    const inputBoxes = screen.getAllByRole('')
})