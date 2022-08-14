export const generalUtilService = (() => {
  /**
     * @Private_Methods
     */

  const mergedClasses = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  /**
     * @Public_Methods
     */
  return {
    mergedClasses,
  };
})();
