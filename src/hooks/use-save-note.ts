import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReactQueryEnums } from '../services/react-query';
import { scientistsApiService } from '../services/scientists';
import { INote } from '../services/scientists/types';

export const useSaveNote = (successCallback?: () => void, errorCallback?: () => void, onSettledCallback?: () => void) => {

  /**
  * @Hooks
  */
  const queryClient = useQueryClient();

  const addNoteInCache = async (newNote: INote) => {
    // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries([ReactQueryEnums.GET_NOTES]);

    // Optimistically update to the new value
    await queryClient.setQueryData([ReactQueryEnums.GET_NOTES], (oldNotes: INote[] | undefined) => {
      // If updating previous note
      if (newNote.isUpdating) {
        return oldNotes?.map(note=>{
          if (note.id === newNote.id) {
            return newNote;
          } else {
            return note;
          }
        });
      }
      // If adding new note
      return [...(oldNotes || []), newNote];
    });
  };

  const { mutate: saveNote, isLoading: savingNote } = useMutation(scientistsApiService.addNote, {
    onSuccess: async ({ data: newNote }: { data: INote }) => {
      await addNoteInCache(newNote);
      if (successCallback) successCallback();
    },
    onError: async ({ data: newNote }: { data: INote }) => {
      await addNoteInCache(newNote);
      if (errorCallback) errorCallback();
    },
    onSettled: () => {
      if (onSettledCallback) onSettledCallback();
    },
    networkMode: 'always',
  });

  return {
    savingNote,
    saveNote,
  };
};