import './Events.css';
import event1 from './Event.jpg'
import event2 from './event2.jpg'
import event3 from './event3.jpg'
import event4 from './event4.jpg'
import event5 from './event 1.jpg'
const events =  [
    { name: 'Sports Day', image: event1, description: 'An exciting day of sports activities and competitions.' },
    { name: 'Art Exhibition', image: event2, description: 'A display of the finest art from upcoming artists.' },
    { name: 'Music Fest', image: event3, description: 'A weekend filled with music from top bands and artists.' },
    { name: 'Science Fair 2024', image: event4, description: 'A showcase of the latest scientific discoveries and projects by students.' },
    { name: 'Tech Conference 2024', image: event5, description: 'An annual tech conference with the latest in technology and innovation.' },
  ];
  
const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.name} />
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;