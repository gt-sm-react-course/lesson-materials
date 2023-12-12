import { renderHook, waitFor } from "@testing-library/react";
import useFetchUsers from "./useFetchUsers";
import { mapUserApiModelToUiModel } from "../shared/mapping/mapUserApiModelToUiModel";

global.fetch = jest.fn();

global.console.error = jest.fn();

const mockUsers = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Doe", email: "jane@example.com" },
];

const transformedMockUsers = mockUsers.map(mapUserApiModelToUiModel);

describe("useFetchUsers Hook", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    (console.error as jest.Mock).mockClear();
  });

  test("should fetch and return users", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    const { result } = renderHook(() => useFetchUsers());

    await waitFor(() => {
      expect(result.current).toEqual(transformedMockUsers);
    });
  });

  test("should handle fetch error", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    const { result } = renderHook(() => useFetchUsers());

    await waitFor(() => {
      expect(result.current).toEqual([]);
    });
  });
});
