// Packages
import { useQuery, useQueryClient } from '@tanstack/react-query';
import localforage from 'localforage';
import { useState } from 'react';

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
  const queryClient = useQueryClient();
  const [componentLoading, setComponentLoading] = useState<boolean>(true);

  const { data: notes } = useQuery(
    [ReactQueryEnums.GET_NOTES],
    () => scientistsApiService.getNotes(),
    {
      onSettled: () => {
        void getAndSetValuesFromStorage();
      },
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
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries([ReactQueryEnums.GET_NOTES]);

      // Optimistically update to the new value
      await queryClient.setQueryData([ReactQueryEnums.GET_NOTES], (oldNotes: INote[] | undefined) => {
        return [...(oldNotes || []), ...storageNotes];
      });
    } catch (err) {
      // This code runs if there were any errors
      console.log(err);
    } finally {
      setComponentLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Loading State */}
      {componentLoading && (
        <div className="border border-bullet mt-6 rounded-xl h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      {/* Empty Notes State */}
      {!!(!componentLoading && !notes?.length) && <EmptyNote />}
      {/* Notes Data State */}
      {!!(!componentLoading && notes?.length) && <NotesList notes={notes} />}
    </div>
  );
};
