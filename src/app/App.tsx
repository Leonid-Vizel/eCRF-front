import { useEffect } from 'react';
import { retrieveDataFromCookie } from 'entities/user/lib/retrieveDataFromCoockie';
import { useAppDispatch } from 'app/providers/StoreProvider/index';
import { AppRouter } from './providers/router';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(retrieveDataFromCookie());
  }, []);
  return (
  // <>
  // <h1>hello world</h1>
    <AppRouter />
  // </>
  );
}
export default App;
