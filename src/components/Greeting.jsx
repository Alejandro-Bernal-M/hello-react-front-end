import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/slices/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { loading, message } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <h1>{message}</h1>
  );
};

export default Greeting;
