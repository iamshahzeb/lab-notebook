// Types
import { useCallback, useState } from 'react';
import { NotesDialogEnums } from '../../services/scientists';
import { INote } from '../../services/scientists/types';

// Components
import { NoteStatsDialog, ViewNoteDialog } from '../dialogs';
import { NoteItem } from './note-item';
import { NotesHeader } from './notes-header';

// Interfaces
interface INotesListProps {
  notes: INote[];
}

export const NotesList = ({ notes }: INotesListProps) => {
  /**
  * @Hooks
  */
  const [statsDialogVisiblity, setStatsDialogVisiblity] = useState<boolean>(false);
  const [viewDialogVisiblity, setViewDialogVisiblity] = useState<boolean>(false);
  const [selectedNoteValue, setSelectedNoteValue] = useState<INote | null>(null);

  const setActiveDialog = useCallback((key: string, value: INote) => {
    switch (key) {
      case NotesDialogEnums.VIEW: {
        setSelectedNoteValue(value);
        setViewDialogVisiblity(true);
        break;
      }
      case NotesDialogEnums.STATS: {
        setSelectedNoteValue(value);
        setStatsDialogVisiblity(true);
        break;
      }
    }
  }, []);

  /**
  * @Render
  */
  return (
    <>
      <NotesHeader />
      <div className="py-8 px-8 bg-white flex justify-between rounded-bl-xl rounded-br-xl">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {notes?.map((note: INote) => (
            <NoteItem key={note.id} note={note} setActiveDialog={setActiveDialog} />
          ))}
        </ul>
      </div>
      <NoteStatsDialog
        note={selectedNoteValue}
        isVisible={statsDialogVisiblity}
        toggleVisiblity={setStatsDialogVisiblity}
      />
      <ViewNoteDialog
        note={selectedNoteValue}
        isVisible={viewDialogVisiblity}
        toggleVisiblity={setViewDialogVisiblity}
      />
    </>
  );
};
