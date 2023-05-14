import React, { useState } from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import Image2 from "../../assets/peoplsse2.jpg";
import "./Apointment.css";

const EventBooking = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [userName, setName] = useState(localStorage.getItem("userName") || "");
  const [phoneNumber, setPhone] = useState(localStorage.getItem("phoneNumber") || "");
  const [showDate, setShowDate] = useState(false);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setShowDate(true);
    setShowCalendar(false);
  };

  const handleBooking = () => {
    const data = {
      userName,
      phoneNumber,
      date: selectedDate.toISOString().slice(0, 10),
    };
    console.log(data)
    axios.post("http://localhost:3636/appointments/create", data)
      .then(() => {
        alert('Booking successful');
        localStorage.removeItem('userName');
        localStorage.removeItem('phoneNumber');
      })
      .catch(() => {
        alert('Booking failed. Please try again later.');
      });
  };

  return (
    <div className="event-booking">
      <div className="event-booking__content">
        <div className="event-booking__image-container">
          <img
            className="event-booking__image"
            src={Image2}
            alt="event"
          />
        </div>
        <div className="event-booking__details">
          <h1 className="event-booking__title">Dermatology</h1>
          <br />
          <p className="event-booking__description">
            Pellentesque dignissim porta lacus, vitae facilisis orci semper eget. Aenean rhoncus blandit ante id tristique. Sed eget metus pulvinar, gravida est quis, vestibulum risus. Sed sodales erat libero, ut placerat dolor posuere et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget elit libero. Nullam et dictum neque. Quisque quis volutpat neque. Maecenas pulvinar aliquet sapien quis molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam molestie mollis magna, in facilisis est laoreet malesuada. In ac nisl vel nulla rhoncus congue eu vel lorem. Maecenas nec ipsum ut sapien faucibus lobortis.
            <br />
            <br />

            In commodo, felis vel eleifend vehicula, ante odio laoreet ligula, elementum dictum leo sapien id libero. Sed consequat erat aliquam convallis mattis. Nunc quis mauris at metus dictum congue. Praesent turpis justo, maximus id auctor vitae, ultricies id dolor. Morbi vulputate augue justo, eget mattis urna tincidunt eu. Proin pharetra lectus sit amet tellus mattis porttitor. Aliquam sed leo a turpis finibus sollicitudin a nec libero. Duis eget dui tellus.
            <br />
            <br />

            Integer eros nibh, condimentum ut orci vitae, faucibus tristique erat. Nunc hendrerit at enim nec congue. Praesent aliquam arcu varius, luctus purus ac, pharetra mi. Vivamus aliquam sollicitudin est, id accumsan diam dictum vitae. Proin ornare libero sem, eu porta metus rutrum non. Etiam sodales odio felis, ut faucibus nisi pellentesque nec. Vestibulum egestas nunc id ultrices aliquam. Nam convallis eget magna eu consectetur. Aliquam porttitor justo id pulvinar aliquam. Praesent ut lacus erat. Donec varius libero ante, vel pellentesque metus congue at. Proin sed odio tincidunt, pharetra dui et, faucibus diam. Nunc tincidunt vitae odio vel ultricies.
          </p>
          <br />
          <br />

          <button
            className="event-booking__button"
            onClick={() => setShowCalendar(true)}
          >
            Book Now
          </button>
          {showDate && (
            <div className="event-booking__selected-date">
              <p>You have selected: {selectedDate.toDateString()}</p>
              <button
                className="event-booking__submit "
                id="Submit_Event"
                onClick={handleBooking}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
      {showCalendar && (
        <div className="event-booking__calendar-popup">
          <div className="event-booking__calendar-container">
            <div className="event-booking__calendar-header">
              <h2 className="event-booking__calendar-title">
                Choose a Date
              </h2>
              <button
                className="event-booking__calendar-close"
                onClick={() => setShowCalendar(false)}
              >
                Close
              </button>
            </div>
            <Calendar
              className="event-booking__calendar"
              onChange={handleDateSelection}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventBooking;
