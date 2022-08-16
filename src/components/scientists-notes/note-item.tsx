// Types
import { useCallback, useMemo } from 'react';
import { NotesDialogEnums } from '../../services/scientists';
import { INote, INotesActionItem } from '../../services/scientists/types';

// Components
import { ActionItems } from '../ui';

// Interfaces
interface INoteItemProps {
  note: INote;
  setActiveDialog: (key: string, value: INote) => void;
}

export const NoteItem = ({ note, setActiveDialog }: INoteItemProps) => {
  /**
  * @Methods
  */

  const ActionItemHandler = useCallback(
    (key: string) => {
      setActiveDialog(key, note);
    },
    [note],
  );

  /**
  * @Variables
  */

  const actionsList: INotesActionItem[] = useMemo(() => {
    return [
      { key: NotesDialogEnums.VIEW, title: 'View', handler: ActionItemHandler },
      { key: NotesDialogEnums.STATS, title: 'Check Stats', handler: ActionItemHandler },
    ];
  }, [note]);

  /**
  * @Render
  */
  return (
    <li
      onClick={() => {
        ActionItemHandler(NotesDialogEnums.VIEW);
      }}
      className="col-span-1 bg-lightGrey rounded-lg shadow-md divide-y divide-gray-200 h-52 w-80 border rounded-r-lg">
      <div className="w-full flex items-center justify-between p-3 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h2 className="text-primary text-sm font-medium truncate">{note.name ?? 'Untitled Note'}</h2>
          </div>
        </div>
        <ActionItems actions={actionsList} />
      </div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="-ml-px w-0 flex-1 flex p-3">
          <p className="mt-1 text-secondary text-sm font-light max-w-prose">{note.description ?? ''}</p>
        </div>
      </div>
    </li>
  );
};
