// Packages
import { PencilAltIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { NoteIcon } from '../../../public/assets/images';
import { AddNoteDialog } from '../dialogs';

export const EmptyNote = () => {
  /**
  * @Hooks
  */
  const { t } = useTranslation();
  const [addNoteDialogVisible, setAddNoteDialogVisible] = useState<boolean>(false);

  /**
   * @Render
   */

  return (
    <div className="border border-bullet mt-6 rounded-xl h-full flex justify-center items-center">
      <div className="text-center">
        <NoteIcon className='inline-block h-12 w-12'/>
        <h3 className="mt-2 text-sm font-medium text-gray-900">{t('No Notes')}</h3>
        <p className="mt-1 text-sm text-gray-500">{t('Get started by creating a new note.')}</p>
        <div className="mt-6">
          <button
            onClick={() => setAddNoteDialogVisible(true)}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <PencilAltIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            {t('New Note')}
          </button>
        </div>
      </div>
      <AddNoteDialog isVisible={addNoteDialogVisible} toggleVisiblity={setAddNoteDialogVisible} />
    </div>
  );
};
