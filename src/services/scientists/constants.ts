import { INotesMockData } from './types';

export enum NotesDialogEnums {
  VIEW = 'view',
  STATS = 'stats'
};

export const scientistsConstantsService = (() => {
  /**
   * @Private
   */
  const notesMockData: INotesMockData = {
    data: [
      {
        id: '01GA6YC28W49297J0EEAVD9C5H',
        name: 'First Note',
        description: 'long description added over here',
      },
      {
        id: '01GA46PXH8EBQ9464YDAAZSN43',
        name: 'Second Note',
        description: 'long description added over here',
      },
      {
        id: '01GA46Q8MXW7R4E7W2TR5PC09S',
        name: 'Third Note',
        description: 'long description added over here',
      },
      {
        id: '01GA46QGGXY5SX9M0JDV91V759',
        name: 'Fourth Note',
        description: 'long description added over here',
      },
      {
        id: '01GA46PKP4PR726KDE4W9CKVGP',
        name: 'Fifth Note',
        description: 'long description added over here',
      },
      {
        id: '01GA46P67M38S7Y3FX3GVN0RE9',
        name: 'Sixth Note',
        description: 'long description added over here',
      },
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
