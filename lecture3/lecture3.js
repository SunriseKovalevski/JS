function helloWorld (argument) {
	if (argument == undefined) {
		console.log(argument);
	}
	if (argument == null) {
		console.log('null');
	}
	if (isNaN(argument)) {
		console.log('NaN');
	}
      for(var prop in argument) {
        if(argument.hasOwnProperty(prop)) {
          console.log('У объекта есть свойства')
        } 
     } 

	  console.log('helloWorld');
    }
    


helloWorld('s');