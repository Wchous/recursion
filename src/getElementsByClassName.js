// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = [];
  var body = document.body;

  var recursive = function (elem){
  	if (elem.classList && elem.classList.contains(className)){
  		output.push(elem)
  	}
  	if (elem.childNodes){
  		for (var item of elem.childNodes){
  			recursive(item)
  		}
  	}
  }
  recursive(body)
  return output
};
