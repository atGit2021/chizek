import { useCallback, useState } from 'react';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { commonFetch } from '../utils/commonFetch';

const useCountMessages = (forumId: string) => {
  const [messagesCount, setMessagesCount] = useState<number | undefined>();
  const countMessages = useCallback(async () => {
    const response = await commonFetch(`/message/count?forumId=${forumId}`);
    if (!response.ok) {
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
      return;
    }
    setMessagesCount(parseInt(await response.text()));
  }, [forumId]);

  return { messagesCount, countMessages };
};

export { useCountMessages };
