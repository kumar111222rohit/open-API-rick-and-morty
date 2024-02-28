import Character from '../services/character.service';

global.fetch = jest.fn();

describe('makeAPICall', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should return data on a successful API call', async () => {
    // Setup mock fetch response
    const mockData = { success: true, data: 'test data' };
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
      ok: true,
    });

    const URL = 'https://api.example.com/data';
    const requestOptions = { method: 'GET' };

    const result = await Character.makeAPICall(URL, requestOptions);

    // Assertions
    expect(fetch).toHaveBeenCalledWith(URL, requestOptions);
    expect(result).toEqual(mockData);
  });

  it('should throw an error on a failed API call', async () => {
    const mockError = new Error('API call failed');
    fetch.mockRejectedValue(mockError);

    const URL = 'https://api.example.com/data';
    const requestOptions = { method: 'GET' };

    // Expect the promise to reject
    await expect(Character.makeAPICall(URL, requestOptions)).rejects.toThrow(
      mockError
    );

    expect(fetch).toHaveBeenCalledWith(URL, requestOptions);
  });
});
