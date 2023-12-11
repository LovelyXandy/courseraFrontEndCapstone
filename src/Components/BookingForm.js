import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";

function BookingForm({availableTimes, dispatch}){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        date:"",
        time: "17:00",
        noOfGuests: 1,
        occasion: "No occasion"
    });

    const updateForm = (evt) => {
        const { name, value } = evt.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
    }

    function submitForm(evt){
        evt.preventDefault();
        //submitForm(formData);
    }

    const handleDateChange = async (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
       dispatch({ payload: value });
      }

    const timeOptions = availableTimes.map(t => <option key={t}>{t}</option>)

return(<>
    <div className="form-container">
        <main>
            <p className="form-header">Please fill in the form below to reserve a table</p>
            <form onSubmit={submitForm}>
            <div className="form-item">
                <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={updateForm} required />
            </div>
            <div className="form-item">
                <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={updateForm} required />
            </div>
            <div className="form-item">
                <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleDateChange} required />
            </div>
            <div className="form-item">
                <label htmlFor="time">Time</label>
                    <select id="time" name="time" value={formData.time} onChange={updateForm} required>
                    {timeOptions}
                    </select>
            </div>
            <div className="form-item">
                <label htmlFor="noOfGuests">Number of Guests</label>
                    <input type="number" min="1" max="10" id="noOfGuests" name="noOfGuests" value={formData.noOfGuests} onChange={updateForm} required />
            </div>
            <div className="form-item">
                <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion" value={formData.occasion} onChange={updateForm} required>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>No occasion</option>
                    </select>
            </div>
            <div className="form-item">
                <input className="submit-btn" type="submit" value="Make Your Reservation" />
            </div>
            </form>
        </main>
    </div>
</>)
}

export default BookingForm;