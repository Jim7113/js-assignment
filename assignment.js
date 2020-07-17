//feetToMile

function feetToMile(feet) {
    if (feet >= 0) {
        var mile = feet / 5280;
        return mile;
    } else {
        return "Distance cannot be negative";
    }
}





//woodCalculator

function woodCalculator(chair, table, bed) {
    if ((chair >= 0) && (chair >= 0) && (bed >= 0)) {
        return chair * 1 + table * 3 + bed * 5;
    } else {
        return "Number of furnitures can not be negative.";
    }
}





//brickCalculator

function brickCalculator(floor) {
    let noOfBricks = 0;
    if (floor > 0) {
        for (let i = 1; i <= floor; i++) {
            if (i <= 10) {
                noOfBricks += 15 * 1000;
            } else if ((i <= 20) && (i > 10)) {
                noOfBricks += 12 * 1000;
            } else {
                noOfBricks += 10 * 1000;
            }
        }
        return noOfBricks;

    } else {
        return "Plaese enter a valid floor number";
    }
}





//tinyFriend

function tinyFriend(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }

    if (arr != '') {

        var friendName = arr[0];
        var tinyNames = [];
        for (var i = 1; i < arr.length; i++) {
            if (friendName.length > arr[i].length) {
                if (arr[i] === "") {
                    console.log(i, "no element is empty and for this reason, it is not considerd as a name");
                } else {
                    friendName = arr[i];
                }
            }
        }
        tinyNames.push(friendName);
        for (var i = arr.indexOf(friendName); i < arr.length; i++) {
            if (friendName.length == arr[i].length) {
                if (tinyNames.indexOf(arr[i]) < 0) {
                    tinyNames.push(arr[i]);
                }
            }
        }
        return "Tiny Name:" + tinyNames.join(" and ");
    } else {
        return "Please enter some names";
    }
}
