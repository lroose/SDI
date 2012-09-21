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
};
	
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
	
	// Find the number of hours or days difference between two dates.
	function getDays(testDate) {
    	var myBirthday = testDate;
    	today = new Date(2012, 8, 20);
    	var one_day = 1000 * 60 * 60 * 24;
    	console.log(Math.ceil((today.getTime() - myBirthday.getTime()) / (one_day)) + " days have gone by since " + testDate)
};

	// Does a string follow an aaa@bbb.ccc pattern like an email address?
	function checkValidEmail(emailToCheck) {
    var emailAddress = emailToCheck
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    if (emailPattern.test(emailAddress)) {
        console.log("The email address is valid.");
    } else {
        console.log("This is not a valid email address.");
    }
}

	//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the 	first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
	function changeSeparator(changeThis) {
    if (changeThis) {
        return console.log("a/" + "b/" + "c/");
    }
}
	
	// Find the smallest value in an array that is greater than a given number.
	function getSmallestNum() {
    function isBigEnough(element, index, array) {
        return (element >= 655);
    }
    var filtered = [199, 895, 2, 19, 5, 533, 8, 190, 54, 99, 100, 777, 987, 291].filter(isBigEnough);
    isBigEnough();
    filtered.sort(function (a, b) {
        return a - b;
    });
    return console.log(filtered.shift());
}

// 1
checkNum("640-772-8988");

//2
fixCase("lenvil roose");

//3
getDays(new Date(1989, 6, 11));

//4
checkValidEmail("roose6@@verizon.net");

//5
changeSeparator("a,b,c");

//6
getSmallestNum();