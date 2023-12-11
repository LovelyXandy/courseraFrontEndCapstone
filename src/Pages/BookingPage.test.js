import { render, screen, fireEvent } from "@testing-library/react";
import Main from '../Components/Main';
import BookingForm from '../Components/BookingForm';
import { BrowserRouter} from 'react-router-dom';

let testDay = new Date();

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

test('Testing updateTimes function', () => {
  expect(times).toMatchObject(times);
});

test('Testing initialiseTimes function', () => {
    expect(times).toMatchObject(times);
  });

test('Form submission with empty inputs', async () => {
    const mockDispatch = jest.fn();
    const mockTimes = [];

    render(<BrowserRouter><BookingForm availableTimes={mockTimes} dispatch={mockDispatch}/></BrowserRouter>);
    const submitButton = screen.getByText('Make Your Reservation');
    fireEvent.click(submitButton);

    expect(times).toMatchObject(times);

  });