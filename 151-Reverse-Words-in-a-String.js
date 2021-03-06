/**
 * https://leetcode.com/problems/reverse-words-in-a-string/description/
 * Difficulty:Medium
 *
 * Given an input string, reverse the string word by word.
 *
 * For example,
 * Given s = "the sky is blue",
 * return "blue is sky the".
 */

/**
 * @param {string} str
 * @returns {string}
 */

使用array.reverse()

var reverseWords = function (str) {
    return str.split(' ')
        .reverse()
        .join(' ');
};
