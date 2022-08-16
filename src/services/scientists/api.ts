// Packages
import { v4 as uuidv4 } from 'uuid';

// Services
import { scientistsConstantsService } from '.';
import { reactQueryUtilService } from '../react-query';

// Types
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
  const getNotes = (): Promise<any> => {
    return new Promise((resolve) => setTimeout(() => resolve(scientistsConstantsService.notesMockData), 500))
      .then(function (response: any) {
        if (reactQueryUtilService.isResponseOk(response.status)) {
          return response;
        } else {
          return Promise.reject('Something went wrong');
        }
      });
  };

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
