// Packages
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// Services
import { generalUtilService } from '../../services/general';

// Types
import { IDialogBaseProps } from '../../services/general/types';
import { scientistsUtilService } from '../../services/scientists';
import { INote } from '../../services/scientists/types';

// Interfaces
interface INoteStatsDialogProps extends IDialogBaseProps {
  note: INote | null;
}

interface IWord {
  word: string;
}

/**
 * @Variables
 */

const formSchema = yup.object().shape({
  word: yup.string().required('word is required!'),
});

export const NoteStatsDialog = ({ isVisible, toggleVisiblity, note }: INoteStatsDialogProps) => {
  /**
  * @Hooks
  */
  const [frequency, setFrequency] = useState<number>(0);
  const [similarWords, setSimilarWords] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid: isFormValid },
  } = useForm<IWord>({
    mode: 'all',
    resolver: yupResolver(formSchema),
    defaultValues: {
      word: '',
    },
  });

  /**
  *
  * @Methods
  */

  /**
  *
  * @param selectedWord single selected word
  * @returns a single joined string like this " hello , hell "
  */
  const calculateSimilarWords = (selectedWord: string) => {
  // This is the accepted distance against which we will match levenshteinDistance.
    const distance: number = 1;
    /**
   * Note:
   * 1) split sentence into array of words
   * 2) filter that array satisfactory condition would be
   * (calculate levenshtein distance between source and target word)
   * 3) The distance between both the words shouldn't exceed our accepted distance which is equal to one.
   * 4) Items which match above conditions will be returned as a single comma separated string.
   */
    return scientistsUtilService
      .splitSentence(note?.description || '')
      .filter((word) => scientistsUtilService.levenshteinDistance(word, selectedWord) === distance)
      .join(' , ');
  };

  /**
  *
  * @param selectedWord single selected word
  * @returns count of matching words.
  */
  const calculateFrequency = (selectedWord: string) => {
  /**
   * Note:
   * 1) split sentence into array of words
   * 2) Filter the array (satisfactory condition would be to match the selected word against each word)
   * 3) we will return the count of filtered array (which will be frequency of matching words).
   */
    return scientistsUtilService
      .splitSentence(note?.description || '')
      .filter((word) => word === selectedWord).length;
  };

  const submitFormDetails = (data: IWord) => {
    setFrequency(calculateFrequency(data?.word));
    setSimilarWords(calculateSimilarWords(data?.word));
  };

  const onClose = () => {
    toggleVisiblity(false);
  };

  /**
  * @Render
  */
  return (
    <Transition.Root show={isVisible} as={Fragment}>
      <Dialog
        open={isVisible}
        onClose={onClose}
        as="div"
        className={generalUtilService.mergedClasses(
          'fixed inset-0 z-10 flex items-center justify-center overflow-y-auto',
          {
            'bg-gray-900': isVisible,
          },
        )}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full  p-8">
                <form className="space-y-6" onSubmit={handleSubmit(submitFormDetails)}>
                  <div>
                    <div className="text-left">
                      <div className="flex items-start justify-between">
                        <Dialog.Title as="h2" className="mt-0.5 text-md leading-6 font-medium text-primary">
             Check Frequency & similar words in a notebook entry
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-secondary hover:text-primary"
                            onClick={onClose}>
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="mt-6 flex rounded-md shadow-sm justify-between">
                          <div className="w-full">
                            <input
                              {...register('word')}
                              onClick={() => reset()}
                              id="word"
                              placeholder="Enter word"
                              name="word"
                              type="text"
                              autoComplete="word"
                              className={`h-12 w-full px-3 py-2 border-2 rounded-l-xl placeholder-secondary font-light text-sm focus:shadow-none focus:border-bulletActive outline-none ${
                                errors.word ? 'border-errorColor' : 'border-secondary'
                              }`}
                            />
                            {errors.word && (
                              <p className="text-errorColor text-sm font-light">{errors.word?.message}</p>
                            )}
                          </div>
                          <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-1/3 font-medium h-12 ${
                              !isFormValid ? 'bg-disabledBgColor' : 'bg-primary'
                            } ${
                              !isFormValid ? 'text-disabledColor' : 'text-white'
                            }   text-sm  py-2 rounded-r-xl `}>
              Check
                          </button>
                        </div>
                        <div className="mt-5 border-t border-gray-200">
                          <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-primary">Frequency</dt>
                              <dd className="mt-1 text-sm text-secondary sm:mt-0 sm:col-span-2">
                                {frequency || 'N/A'}
                              </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-primary">Similar Words</dt>
                              <dd className="mt-1 text-sm text-secondary sm:mt-0 sm:col-span-2">
                                {similarWords || 'None'}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
