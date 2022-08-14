// Types
import { INote } from '../../services/scientists/types';

// Components
import { NoteItem } from './note-item';
import { NotesHeader } from './notes-header';

// Interfaces
interface INotesListProps {
  notes: INote[];
}

export const NotesList = ({ notes }: INotesListProps) => {
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
            <NoteItem key={note.id} note={note} />
          ))}
        </ul>
      </div>
    </>
  );
};
