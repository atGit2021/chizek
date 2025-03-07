
import { useLogout } from "./useLogout";
import { API_URL } from "../constants/api/urls";
import { renderHook } from "@testing-library/react-hooks";

global.fetch = jest.fn();

describe("useLogout", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch the correct URL once and wait for the logout function to finish", async () => {
    const mockResponse = { status: 200 };
    (fetch as jest.Mock).mockResolvedValue(mockResponse);
    
    const { result } = renderHook(() => useLogout());
    const logoutPromise = result.current.logout();

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/auth/logout`, {
      method: "POST",
    });
    expect(fetch).toHaveBeenCalledTimes(1); 

    await logoutPromise;
  });
});
