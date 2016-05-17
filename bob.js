//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if((input.match(/[a-z]/i)) && (input === input.toUpperCase())){
    return 'Whoa, chill out!';
  }else if(input.charAt(input.length -1) === '?'){
    return 'Sure.';
  }else if((/\S/.test(input)) === false){
    return 'Fine. Be that way!';
  }else{
    return 'Whatever.';
  }
};

module.exports = Bob;
