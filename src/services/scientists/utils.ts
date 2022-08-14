export const scientistsUtilService = (function () {
  /**
   *
   * @Private_methods
   */

  const levenshteinDistance = (sourceWord: string, targetWord: string) => {
    // If either of the two strings has a length of zero, return the length of the other one.
    if (!sourceWord.length) return targetWord.length;
    if (!targetWord.length) return sourceWord.length;
    const arr: any = [];
    // Use a for loop to iterate over the letters of the target string and a nested for loop to iterate over the letters of the source string.
    for (let i: number = 0; i <= targetWord.length; i++) {
      arr[i] = [i];
      for (let j: number = 1; j <= sourceWord.length; j++) {
        /**
         * Use a for loop to iterate over the letters of the target string and a nested for loop to iterate over the letters of the source string,
         * Calculate the cost of substituting the letters corresponding to i - 1 and j - 1
         * in the target and source respectively (0 if they are the same, 1 otherwise)
         * Use Math.min() to populate each element in the 2D array with the minimum of the cell above incremented by one,
         * the cell to the left incremented by one or the cell to the top left incremented by the previously calculated cost.
         */
        arr[i][j] =
                    i === 0
                      ? j
                      : Math.min(
                        arr[i - 1][j] + 1,
                        arr[i][j - 1] + 1,
                        arr[i - 1][j - 1] + (sourceWord[j - 1] === targetWord[i - 1] ? 0 : 1),
                      );
      }
    }
    // Return the last element of the last row of the produced array.
    return arr[targetWord.length][sourceWord.length];
  };

  const splitSentence = (sentence: string) => sentence?.length ? sentence.split(' ') : [];

  /**
   *
   * @Public_methods
   */

  return {
    levenshteinDistance,
    splitSentence,
  };
})();