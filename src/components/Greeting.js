import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingReducer';

export default function Greetings() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.text);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
}
