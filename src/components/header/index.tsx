// Component
import { LanguageDropdown } from '../ui/language-dropdown';

const Header = () => {
  /**
   * @Render
   */
  return (
    <div className="sticky top-0 z-50 flex-shrink-0 flex h-16 bg-primary shadow">
      <div className="flex-1 px-8 flex justify-end">
        <div className="ml-4 flex items-center md:ml-6">
          <LanguageDropdown/>
        </div>
      </div>
    </div>
  );
};

export default Header;
