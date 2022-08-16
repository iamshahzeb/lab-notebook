// Packages
import { useQuery } from '@tanstack/react-query';

// Components
import { EmptyNote, NotesList } from '../../components/scientists-notes';

// Services
import { ReactQueryEnums } from '../../services/react-query';
import { scientistsApiService } from '../../services/scientists';

export const ScientistsNotebook = () => {
  /**
  * @Hooks
  */
  const { isLoading, data: notes } = useQuery(
    [ReactQueryEnums.GET_NOTES],
    () => scientistsApiService.getNotes(),
    {
      keepPreviousData: false,
      staleTime: Infinity,
      networkMode: 'always',
    },
  );

  return (
    <div className="flex flex-col h-screen">
      <div className="border border-bullet mt-6 rounded-xl">
        {/* Loading State */}
        {isLoading && <h1>...loading</h1>}
        {/* Empty Notes State */}
        {!!(!isLoading && !notes?.data?.length) && <EmptyNote />}
        {/* Notes Data State */}
        {!!(!isLoading && notes?.data?.length) && <NotesList notes={notes?.data} />}
      </div>
    </div>
  );
};
