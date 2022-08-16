// Packages
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { AddNoteDialog } from '../dialogs';

export const NotesHeader = () => {
  /**
  * @Hooks
  */
  const { t } = useTranslation();
  const [addNoteDialogVisible, setAddNoteDialogVisible] = useState<boolean>(false);

  /**
  * @Render
  */
  return (
    <>
      <div className="flex items-center justify-between w-full h-20 px-8 py-4 bg-lightGrey rounded-tl-xl rounded-tr-xl">
        <div>
          <h3 className="text-primary font-medium text-lg">{t('Lab Notes')}</h3>
        </div>
        <div>
          <button
            onClick={() => setAddNoteDialogVisible(true)}
            type="button"
            className="h-12 px-5 text-white bg-primary text-sm  py-1 rounded-md">
            {t('Add Notes')}
          </button>
        </div>
      </div>
      <AddNoteDialog isVisible={addNoteDialogVisible} toggleVisiblity={setAddNoteDialogVisible} />
    </>
  );
};
