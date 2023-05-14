import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3636/appointments/get');
        setAppointments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, []);

  const handleButtonClick = async (_id) => {
    try {
      await axios.put(`http://localhost:3636/appointments/check/${_id}`, { checked: true });
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === _id ? { ...appointment, checked: true } : appointment
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <br />
      {appointments.map((appointment) => (
        <div key={appointment._id} className="appointment-container">
          <div className="appointment-details">
            <p>{`Name: ${appointment.userName}`}</p>
            <p>{`Phone Number: ${appointment.phoneNumber}`}</p>
            <p>{`Date: ${appointment.date}`}</p>
          </div>
          <button
            className={`check-button ${appointment.checked ? 'checked' : ''}`}
            onClick={() => handleButtonClick(appointment._id)}
            disabled={appointment.checked}
          >
            {appointment.checked ? <span>&#10003;</span> : 'Check In'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
