module.exports = function toReadable(number) {

    var numIn = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'];

    if (number < 20) {
        return numIn[number];
    }

    var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
     'eighty', 'ninety'];

    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return tens[number / 10];
        }
        else return (tens[Math.floor(number / 10)] + ' ' + numIn[number % 10]);
    }

    if (number > 99) {
        if (number % 100 == 0) {
            return numIn[number / 100] + ' ' + 'hundred';
        }

        else if (number % 10 == 0) {
            return (numIn[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + 
            tens[(Math.floor(number / 10)) % 10]);
        }

        else if (number % 100 < 20) {
            return (numIn[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + 
            numIn[number % 100]);
        }

        else return (numIn[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
         tens[(Math.floor(number / 10)) % 10] + ' ' + numIn[number % 10])
    }
}
