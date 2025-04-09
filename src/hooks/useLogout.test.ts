import { useLogout } from './useLogout';
import { renderHook } from '@testing-library/react';

global.fetch = jest.fn();

describe('useLogout', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch the correct URL once and wait for the logout function to finish', async () => {
    const mockResponse = { ok: true };
    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useLogout());
    await result.current.logout();

    expect(fetch).toHaveBeenCalledWith(`/auth/logout`, {
      method: 'POST',
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should throw error when logout fails', async () => {
    const mockResponse = { ok: false };
    (fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useLogout());

    await expect(result.current.logout()).rejects.toThrow(
      'An unknown error has occured. Please try again later.',
    );
  });
});
