var dnaTranscriber = function(){};

dnaTranscriber.prototype.toRna = function(strand){
  return strand.split('').map(function(nucleotide){
    if (nucleotide === 'G') {
      return 'C';
    } else if (nucleotide === 'C') {
      return 'G';
    } else if (nucleotide === 'T') {
      return 'A';
    } else if (nucleotide === 'A') {
      return 'U';
    }
  }).join('');
}

module.exports = dnaTranscriber;
