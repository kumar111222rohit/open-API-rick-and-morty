import getURL from "../utils/rickAndMortyUrl";
export default class Character {
  /**
   * Asynchronously fetches data from a given URL with specified request options.
   *
   * @param {string} URL - The endpoint URL.
   * @param {object} requestOptions - Options for the fetch request.
   * @returns {Promise<any>} JSON response data or throws an error on failure.
   */
  static async makeAPICall(URL: string, requestOptions: object) {
    try {
      const response = await fetch(URL, requestOptions);
      const data = await response.json();
      return data;
    } catch (e) {
      //error
      throw e;
    }
  }

  /**
   * Fetches character data from a specified page.
   *
   * @param {any} page - The page number to fetch data from.
   * @returns {Promise<any>} The character data from the API.
   */ static async fetchCharacterData(page: any) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    return Character.makeAPICall(
      `${getURL("FETCH_CHARACTER_DATA")}?page=${page}`,
      requestOptions,
    );
  }
  /**
   * Fetches data for multiple episodes in a single call to avoid pagination.
   *
   * @returns {Promise<any>} The episode data from the API.
   */
  static async fetchEpisodeData() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    //passing all episodes as parameter to get the entire result in one call instead of paginated result.
    return Character.makeAPICall(
      `${getURL("FETCH_EPISODE_DATA")}` +
        "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41",
      requestOptions,
    );
  }
}
