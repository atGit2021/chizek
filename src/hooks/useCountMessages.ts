import { useCallback, useState } from 'react';
import { API_URL } from '../constants/api/urls';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';

const useCountMessages = (forumId: string) => {
  const [messagesCount, setMessagesCount] = useState<number | undefined>();
  const countMessages = useCallback(async () => {
    const response = await fetch(`${API_URL}/message/count?forumId=${forumId}`);
    if (!response.ok) {
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
      return;
    }
    setMessagesCount(parseInt(await response.text()));
  }, [forumId]);

  return { messagesCount, countMessages };
};

export { useCountMessages };
