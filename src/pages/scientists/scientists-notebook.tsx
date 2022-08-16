// Packages
import { useQuery } from '@tanstack/react-query';
import localforage from 'localforage';
import { useEffect, useState } from 'react';

// Components
import { EmptyNote, NotesList } from '../../components/scientists-notes';
import { Loader } from '../../components/ui';

// Services
import { ReactQueryEnums } from '../../services/react-query';
import { scientistsApiService } from '../../services/scientists';
import { INote } from '../../services/scientists/types';

export const ScientistsNotebook = () => {
  /**
  * @Hooks
  */
  const [storageLoading, setStorageLoading] = useState<boolean>(true);
  const [notesInStorage, setNotesInStorage] = useState<INote[]>([]);
  const [notes, setNotes] = useState<INote[]>([]);

  const { isLoading, data: notesInServer } = useQuery(
    [ReactQueryEnums.GET_NOTES],
    () => scientistsApiService.getNotes(),
    {
      keepPreviousData: false,
      staleTime: Infinity,
      networkMode: 'always',
    },
  );

  /**
  * @Methods
  */

  const getAndSetValuesFromStorage = async () => {
    const storageNotes: any = [];
    try {
      await localforage.iterate((value) => {
        // Resulting key/value pair -- this callback
        // will be executed for every item in the
        // database.
        if (value) {
          storageNotes.push(value);
        }
      });
      setNotesInStorage(storageNotes);
    } catch (err) {
      // This code runs if there were any errors
      console.log(err);
    } finally {
      setStorageLoading(false);
    }
  };

  const init = () => getAndSetValuesFromStorage();

  useEffect(() => {
    void init();
  }, []);

  useEffect(() => {
    if (!storageLoading && !isLoading) {
      setNotes([...notesInServer, ...notesInStorage]);
    }
  }, [storageLoading, isLoading, notesInStorage, notesInServer]);

  /**
  * @Variables
  */

  const isComponentLoading = isLoading || storageLoading;
  const areNotesEmpty = !!(!notesInServer?.length && !notesInStorage?.length);

  return (
    <div className="flex flex-col h-full">
      {/* Loading State */}
      {isComponentLoading && (
        <div className="border border-bullet mt-6 rounded-xl h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      {/* Empty Notes State */}
      {!!(!isComponentLoading && areNotesEmpty) && <EmptyNote />}
      {/* Notes Data State */}
      {!!(!isComponentLoading && !areNotesEmpty) && <NotesList notes={notes} />}
    </div>
  );
};
