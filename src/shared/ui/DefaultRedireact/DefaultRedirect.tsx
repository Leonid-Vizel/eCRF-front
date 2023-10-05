import { useEffect } from 'react';
import { defaultRedirect } from '../../lib/defaultRedirect';

export const DefaultRedirect = () => {
  useEffect(() => {
    defaultRedirect('api/net/Protocols');
  }, []);
  return (
    <div />
  );
};
