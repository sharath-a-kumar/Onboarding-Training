// EventsPage.js
import React, { useState } from 'react';

const EventsPage = () => {
  // Sample events data (replace this with your actual data)
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Pet Adoption Day',
      date: '2024-04-15',
      time: '12:00 PM - 4:00 PM',
      location: 'Wagging Tails Adoption Center',
      description: 'Join us for a day of furry friends looking for forever homes!',
    },
    {
      id: 2,
      name: 'Puppy Playdate',
      date: '2024-04-20',
      time: '2:00 PM - 3:30 PM',
      location: 'Local Park',
      description: 'Bring your puppies for a fun-filled playdate with other furry pals!',
    },
    {
      id: 3,
      name: 'Cat Adoption Fair',
      date: '2024-05-01',
      time: '11:00 AM - 3:00 PM',
      location: 'Meow Haven Adoption Center',
      description: 'Discover adorable cats and kittens ready to find their forever homes.',
    },
    {
      id: 4,
      name: 'Training Workshop: Basic Obedience',
      date: '2024-05-10',
      time: '6:30 PM - 8:00 PM',
      location: 'Wagging Tails Training Room',
      description: 'Learn essential obedience training techniques for your new furry family member.',
    },
    // Add more events as needed
  ]);

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>

      {events.map((event) => (
        <div key={event.id} className="event-card">
          <h2>{event.name}</h2>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <p>{event.description}</p>
          {/* Add more details or buttons as needed */}
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
