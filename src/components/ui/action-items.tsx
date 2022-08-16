// Packages
import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

// Services
import { generalUtilService } from '../../services/general';

// Types
import { INotesActionItem } from '../../services/scientists/types';

// Interfaces
interface IActionItemsProps {
  actions: INotesActionItem[];
}

export const ActionItems = ({ actions }: IActionItemsProps) => {
  /**
  * @Render
  */
  return (
    <Menu as="div" className="flex justify-end relative">
      <div onClick={(e) => e.stopPropagation()}>
        <Menu.Button className="rounded-full relative flex items-center text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-primary">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="origin-top-right absolute z-50 right-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-primary ring-opacity-5 focus:outline-none">
          <div className="py-0.4 border border-borderColor rounded-md action_items_styling">
            {actions.map((action: INotesActionItem) => (
              <Menu.Item key={action.key}>
                {({ active }) => (
                  <a
                    onClick={() => action?.handler(action.key)}
                    className={generalUtilService.mergedClasses(
                      active ? 'bg-borderColor text-primary' : 'text-primary',
                      'block px-4 py-4 text-sm font-medium',
                    )}>
                    {action?.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
