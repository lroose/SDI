alert("JavaScript works!");
//Lenvil Roose
//SDI 1209
/* Project 4
Library of functions */

	// Does a string follow a 123-456-7890 pattern like a phone number?
	var checkNum = function(testNumber) {
		
		var cellNumber = testNumber;
		var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
		if (pattern.test(cellNumber)) {
			var validCellNumber = cellNumber.replace(pattern, "($1) $2-$3");
			console.log("Cell number is valid!");
		} else {
			return console.log("Invalid cell number! Please try again.");
		}
	}
	
	// Title-case a string (split into words, then uppercase the first letter of each word.
	function fixCase(fixThis) {
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    fixThis.toProperCase();
    console.log(fixThis.toProperCase());
	
	};


// 1
checkNum("640-772-8988");

//2
fixCase("lenvil roose");

//3


//4