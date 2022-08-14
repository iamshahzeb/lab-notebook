// Packages
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

// Services
import { generalUtilService } from '../../services/general';

// Types
import { IDialogBaseProps } from '../../services/general/types';
import { INote } from '../../services/scientists/types';

// Interfaces
interface IViewNoteDialogProps extends IDialogBaseProps {
  note: INote | null;
}

export const ViewNoteDialog = ({ isVisible, toggleVisiblity, note }: IViewNoteDialogProps) => {
  /**
  *
  * @Methods
  */

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
              <Dialog.Panel className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-8">
                <form className="space-y-6">
                  <div>
                    <div className="text-left">
                      <div className="flex items-start justify-end">
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
                      <div className="bg-white overflow-hidden">
                        <div className="px-2 py-3 sm:px-4">
                          <h3 className="text-md leading-6 font-medium text-primary">{note?.name}</h3>
                        </div>
                        <div className="px-2 py-3 sm:px-4">
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-primary">Description</dt>
                            <dd className="mt-1 text-sm text-secondary">
                              {note?.description}
                            </dd>
                          </div>
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
