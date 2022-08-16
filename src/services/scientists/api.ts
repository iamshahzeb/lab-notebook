// Packages
import i18next from 'i18next';
import localforage from 'localforage';
import { v4 as uuidv4 } from 'uuid';

// Services
import { scientistsConstantsService } from '.';
import { reactQueryUtilService } from '../react-query';
import { NoteStatusEnums } from './constants';

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
          return response.data;
        } else {
          return Promise.reject(i18next.t('Something went wrong'));
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
    let mockResponse = {
      status: 200,
      data: {
        ...payload,
        id: payload?.id || uuidv4(),
        status: NoteStatusEnums.SUCCESS,
        isUpdating: payload?.id ? true : false,
      },
      message: i18next.t('Note added successfully!'),
    };
    /**
     * NOTE: since this is not a real API call we will just check if network is available,
     * and if network isn't available we will throw error.
     */
    if (navigator.onLine) {
      if (payload.id) void localforage.removeItem(payload.id!);
      return new Promise((resolve) => setTimeout(() => resolve(mockResponse), 500));
    } else {
      mockResponse = {
        ...mockResponse,
        status: 400,
        message: i18next.t('Error! Note cannot be uploaded due to bad internet connection, Please retry!'),
        data: { ...mockResponse.data, status: NoteStatusEnums.FAILED },
      };
      return new Promise((_, reject) => setTimeout(() => reject(mockResponse), 500));
    }
  };

  /**
   * NOTE: only declare methods you need to export from this service in this return object.
   */
  return {
    getNotes,
    addNote,
  };
})();
