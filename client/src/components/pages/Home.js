import React from 'react';
import Events from '../events/Events';
import EventForm from '../events/EventForm';
import EventFilter from '../events/EventFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <EventForm />
      </div>
      <div>
        <EventFilter />
        <Events />
      </div>
    </div>
  );
};

export default Home;
