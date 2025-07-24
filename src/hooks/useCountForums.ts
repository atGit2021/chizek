import { useCallback, useState } from 'react';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { commonFetch } from '../utils/commonFetch';

const useCountForums = () => {
  const [forumsCount, setForumsCount] = useState<number | undefined>();
  const countForums = useCallback(async () => {
    const response = await commonFetch(`/forums/count`);
    if (!response.ok) {
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
      return;
    }
    setForumsCount(parseInt(await response.text()));
  }, []);

  return { forumsCount, countForums };
};

export { useCountForums };
