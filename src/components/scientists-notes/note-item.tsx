// Types
import { useMemo } from 'react';
import { INote, INotesActionItem } from '../../services/scientists/types';

// Components
import { ActionItems } from '../ui';

// Interfaces
interface INoteItemProps {
  note: INote;
}

export const NoteItem = ({ note }: INoteItemProps) => {
  /**
   * @Methods
   */

  const viewHandler = () => {
    console.log('on view handler called');
  };

  const frequencyHandler = () => {
    console.log('frequencyHandler handler called');
  };

  const onSimilarWordsHandler = () => {
    console.log('onSimilarWordsHandler handler called');
  };

  /**
   * @Variables
   */

  const actionsList: INotesActionItem[] = useMemo(() => {
    return [
      { key: 'view', title: 'View', handler: viewHandler },
      { key: 'frequency', title: 'Check Frequency', handler: frequencyHandler },
      { key: 'similarWords', title: 'Check Similar Words', handler: onSimilarWordsHandler },
    ];
  }, []);

  /**
   * @Render
   */
  return (
    <li className="col-span-1 bg-lightGrey rounded-lg shadow-md divide-y divide-gray-200 h-52 w-80 border rounded-r-lg">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h2 className="text-primary text-sm font-medium truncate">{note.name ?? 'Untitled Note'}</h2>
          </div>
        </div>
        <ActionItems actions={actionsList}/>
      </div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="-ml-px w-0 flex-1 flex p-3">
          <p className="mt-1 text-primary text-sm font-medium max-w-prose">{note.description ?? ''}</p>
        </div>
      </div>
    </li>
  );
};
