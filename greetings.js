import React from 'react'
const greetingMessage='Hello, from the custom module!';
const GREET = () => {
  console.log(greetingMessage);
};

module.exports = GREET;