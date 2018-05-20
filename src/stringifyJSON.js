// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null){
  	return 'null'
  };
  if (obj === undefined){
  	return 'undefined'
  };
  if (typeof obj === 'string'){
  	return '"' + obj + '"'
  }
  if (typeof obj === 'number' || typeof obj === 'boolean'){
  	return String(obj)
  };
  if(Array.isArray(obj)){
  	var output = ''
  	for (var i=0; i<obj.length-1;i++){
  		output += stringifyJSON(obj[i])+','
  	}
  	var lastElem = obj[obj.length-1] ? stringifyJSON(obj[obj.length-1]):'';
  	return '[' + output + lastElem + ']'
  }
  if (typeof obj === 'object'){
  	var objOutput = ''
  	for (var keys in obj){
  		if (keys !== 'undefined' && keys !== 'functions'){
  			objOutput += stringifyJSON(keys)+':'+stringifyJSON(obj[keys]) + ',';
  		}
  	}
  	return '{'+objOutput.substring(0,objOutput.length-1)+'}'
  }
};
