// Packages
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useSaveNote } from '../../hooks';

// Services
import { generalUtilService } from '../../services/general';
import { IDialogBaseProps } from '../../services/general/types';

// Types
import { IAddNote } from '../../services/scientists/types';

// Interfaces
interface IAddNoteDialogProps extends IDialogBaseProps {}

/**
 * @Variables
 */

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required!').max(25, 'Name must be atmost 25 characters'),
  description: yup
    .string()
    .required('Description is required!')
    .max(2048, 'Note description must be atmost 2048 characters'),
});

export const AddNoteDialog = ({ isVisible, toggleVisiblity }: IAddNoteDialogProps) => {
  /**
  * @Hooks
  */

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid: isFormValid },
  } = useForm<IAddNote>({
    mode: 'all',
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  /**
  * @Methods
  */
  const onClose = () => {
    toggleVisiblity(false);
    reset();
  };

  const { saveNote, savingNote } = useSaveNote(onClose, onClose);

  const submitFormDetails = (data: IAddNote) => {
    saveNote(data);
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
              <Dialog.Panel className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-8">
                <form className="space-y-6" onSubmit={handleSubmit(submitFormDetails)}>
                  <div>
                    <div className="text-left">
                      <div className="flex items-start justify-between">
                        <Dialog.Title as="h2" className="mt-0.5 text-md leading-6 font-medium text-primary">
                          {t('Add Note')}
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
                        <div className="mt-4">
                          <span className="textarea_label">{t('Name')}</span>
                          <input
                            {...register('name')}
                            id="name"
                            placeholder={`${t('Enter Name')}`}
                            name="name"
                            type="name"
                            autoComplete="name"
                            className={`h-12 w-full px-3 py-2 border-2 rounded-xl placeholder-secondary font-light text-sm focus:shadow-none focus:border-bulletActive outline-none ${
                              errors.name ? 'bordererror' : 'border-secondary'
                            }`}
                          />
                          {errors.name && (
                            <p className="texterror text-sm font-light">{t(`${errors.name?.message}`)}</p>
                          )}
                        </div>
                        <div className="mt-4">
                          <span className="textarea_label"> {t('Description')}</span>
                          <input
                            {...register('description')}
                            id="description"
                            placeholder={`${t('Enter some description')}`}
                            name="description"
                            type="description"
                            autoComplete="description"
                            className={`h-12 w-full px-3 py-2 border-2 rounded-xl placeholder-secondary font-light text-sm focus:shadow-none focus:border-bulletActive outline-none ${
                              errors.name ? 'bordererror' : 'border-secondary'
                            }`}
                          />
                          {errors.description && (
                            <p className="texterror text-sm font-light">
                              {t(`${errors.description?.message}`)}
                            </p>
                          )}
                        </div>
                        <div className="mt-5 sm:mt-6">
                          <button
                            type="submit"
                            disabled={!isFormValid || savingNote}
                            className={`w-full font-medium h-12 ${
                              !isFormValid ? 'bg-disabled' : 'bg-primary'
                            } ${!isFormValid ? 'text-disabledColor' : 'text-white'}   text-sm  py-2 rounded-xl `}>
                            {t('Add')}
                          </button>
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
