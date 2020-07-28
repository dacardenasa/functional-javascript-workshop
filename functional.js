'use strict'

const doubleAll = (numbers) => {
  return numbers.map( number => number * 2);
};

const getShortMessages = (messages) => {
  return messages.filter( msg => msg.message.length < 50 )
    .map( msg => msg.message);
};

const checkUsersValid = (goodUsers) => {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every( (elem) => { 
      return goodUsers.some(item => item.id === elem.id);
    });
  };
};

const countWords = (inputWords) => {
  return inputWords.reduce( (acum, word) => ({
    ...acum, 
    [word]: inputWords.filter( item => item === word).length
  }), {});
};

const duckCount = (...args) => {
  return args.filter( item => Object.prototype.hasOwnProperty.call(item, 'quack') )
  .length;
};

module.exports = { doubleAll, getShortMessages, checkUsersValid, countWords, duckCount }


