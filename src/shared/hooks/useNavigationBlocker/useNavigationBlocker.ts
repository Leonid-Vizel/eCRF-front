import { useEffect } from 'react';
import { unstable_useBlocker as useBlocker } from 'react-router-dom';

interface UseNavigationBlocker {
  beforeUnloadUseEffectDependency?: unknown;
  handleBeforeUnload: (event: BeforeUnloadEvent) => string;
  isBlocked: boolean;
  blockerHandler: () => void;
}

export const useNavigationBlocker = ({
  beforeUnloadUseEffectDependency = null,
  handleBeforeUnload,
  isBlocked,
  blockerHandler,
}: UseNavigationBlocker) => {
  useEffect(() => {
    if (beforeUnloadUseEffectDependency) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [beforeUnloadUseEffectDependency, handleBeforeUnload]);
  const blocker = useBlocker(isBlocked);
  useEffect(() => {
    if (blocker.state === 'blocked' && isBlocked) {
      blockerHandler();
    }
  }, [blocker, isBlocked, blockerHandler]);
  return blocker;
};
