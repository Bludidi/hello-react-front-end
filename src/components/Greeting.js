import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greetingText);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <>
      <p>Random Grettings</p>
      {randomGreeting.map((greeting) => (
        <div key={greeting.id}>
          <h2>{greeting.greetingText}</h2>
        </div>
      ))}
    </>
  );
};

export default Greetings;
