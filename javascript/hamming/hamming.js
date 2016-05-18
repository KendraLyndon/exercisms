var Hamming = function(){}

Hamming.prototype.compute = function(dna1, dna2){
  var distance = 0;
  if(dna1.length === dna2.length){
    if(dna1 === dna2){return 0;}
    else {
      for(var i=0; i<dna1.length; i++){
        if(dna1.charAt(i) != dna2.charAt(i)){
          distance++;
        }
      } return distance;
    }
  }else {
    throw new Error('DNA strands must be of equal length.');
  }
}

module.exports = Hamming;
