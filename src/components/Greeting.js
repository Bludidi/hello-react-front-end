import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const newGreetings = useSelector((state) => state.greeting.greetingData);
  const isLoading = useSelector((state) => state.greeting.isLoading);

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (newGreetings.length === 0) {
    return <h1>No Greetings</h1>;
  }
  return (
    <div>
      {newGreetings.map((greeting) => (
        <div key={greeting.id}>
          <h2>{greeting.greeting}</h2>
        </div>
      ))}
    </div>
  );
};

export default Greeting;
