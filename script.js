$( document ).ready(function() {
    for (var number = 1; number <= 100; number++) {
    	var string = '';

    	if (number % 3 == 0) {
    		string +='fizz'
    	}

		if (number % 5 == 0) {
    		string +='buzz';
    	}

    	if (string == '') {
    		string += number;
    	}

    	console.log(string);
	};
});




