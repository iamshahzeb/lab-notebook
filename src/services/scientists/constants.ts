import { INotesMockData } from './types';

export enum NotesDialogEnums {
  VIEW = 'view',
  STATS = 'stats'
};

export enum NoteStatusEnums {
  SUCCESS = 'success',
  FAILED = 'failed'
}

export const scientistsConstantsService = (() => {
  /**
   * @Private
   */
  const notesMockData: INotesMockData = {
    data: [
    ],
    status: 200,
  };

  /**
   * @Public_Methods
   */
  return {
    notesMockData,
  };
})();
