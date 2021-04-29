function createLeapYear(start, end) {
    function isLeapYear(year) {
        return new Date(year, 1, 29).getDate() === 29;
    }

    let listLeapYear = []

    if (isLeapYear(start) && isLeapYear(end)) {
        for (let year = start; year <= end; year += 4) {
            listLeapYear.push(year);
        }
    } else if (!isLeapYear(start) && isLeapYear(end)) {
        let startLeapYear = start;

        for (let s = start; s <= start+7; s++) {
            if ( isLeapYear(s) ) {
                startLeapYear = s;
                break;
            }
        }

        for (let year = startLeapYear; year <= end; year += 4) {
            listLeapYear.push(year);
        }
    } else if (isLeapYear(start) && !isLeapYear(end)) {
        let endLeapYear = end;

        for (let e = end; e <= end-7; e--) {
            if ( isLeapYear(e) ) {
                startLeapYear = e;
                break;
            }
        }

        for (let year = start; year <= endLeapYear; year += 4) {
            listLeapYear.push(year);
        }
    } else {
        let startLeapYear = start;

        for (let s = start; s <= start+7; s++) {
            if ( isLeapYear(s) ) {
                startLeapYear = s;
                break;
            }
        }

        let endLeapYear = end;

        for (let e = end; e <= end-7; e--) {
            if ( isLeapYear(e) ) {
                startLeapYear = e;
                break;
            }
        }

        for (let year = startLeapYear; year <= endLeapYear; year += 4) {
            listLeapYear.push(year);
        }
    }

    return listLeapYear;
}

console.log( createLeapYear(1900, 2020) );
console.log( createLeapYear(1905, 2020) );
console.log( createLeapYear(1994, 2018) );
console.log( createLeapYear(2000, 2018) );