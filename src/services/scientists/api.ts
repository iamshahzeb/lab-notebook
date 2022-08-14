// Packages
import { v4 as uuidv4 } from 'uuid';

// Types
import { reactQueryUtilService } from '../react-query';
import { IAddNote } from './types';

export const scientistsApiService = (() => {
  /**
     *
     * @private_methods
     */


  /**
     *
     * @returns Promise
     */
  const getNotes = (): Promise<any> => fetch('/src/services/scientists/mock-data.json'
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  )
    .then(function (response) {
      if (reactQueryUtilService.isResponseOk(response.status)) {
        return response.json();
      } else {
        return Promise.reject('Something went wrong');
      }
    });

  /**
     *
     * @param payload contains add notes payload
     * @returns Promise
     */
  const addNote = (payload: IAddNote): Promise<any> => {
    /**
     * use payload as body in POST API call
     */
    const mockResponse = {
      status: 200,
      data: { ...payload, id: uuidv4() },
    };
    return new Promise((resolve) => setTimeout(() => resolve(mockResponse), 500));
  };

  /**
   * NOTE: only declare methods you need to export from this service in this return object.
   */
  return {
    getNotes,
    addNote,
  };
})();
