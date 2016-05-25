var dnaTranscriber = function(){};

dnaTranscriber.prototype.toRna = function(strand){
  return strand.split('').map(function(nucleotide){
    switch(nucleotide){
      case 'G': return 'C'; break;
			case 'C': return 'G'; break;
			case 'T': return 'A'; break;
			case 'A': return 'U'; break;
    }
  }).join('');
}

module.exports = dnaTranscriber;
