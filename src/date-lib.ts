export const monthsOfYear: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
export const daysOfWeek: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function twoDigitPad(num: number) {
    return num < 10 ? "0" + num : num;
}
export function addMonths(date: Date, amount: number): Date {
    return new Date(date.getFullYear(), date.getMonth() + amount, date.getDate(), date.getHours(), date.getMinutes());
}
export function addYears(date: Date, amount: number): Date {
    return new Date(date.getFullYear() + amount, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
}
export function isAfter(date1: Date, date2: Date): boolean {
    if (date1 && date2) {
        return date1.getTime() > date2.getTime();
    } else {
        return false;
    }
}
export function isBefore(date1: Date, date2: Date): boolean {
    if (date1 && date2) {
        return date1.getTime() < date2.getTime();
    } else {
        return false;
    }
}
export function isWithinMinuteRange(minutes: number, date1?: Date, date2?: Date): boolean {
    if (typeof date1 == "string") {
        date1 = new Date(date1);
    }
    if (typeof date2 == "string") {
        date2 = new Date(date2);
    }
    if (date1 && date2) {
        return isSameHour(date1, date2) && date1.getMinutes() - date2.getMinutes() <= minutes;
    } else {
        return false;
    }
}
export function isSameDate(date1?: Date, date2?: Date): boolean {
    if (typeof date1 == "string") {
        date1 = new Date(date1);
    }
    if (typeof date2 == "string") {
        date2 = new Date(date2);
    }
    if (date1 && date2) {
        const d1 = date1.getDate();
        const d2 = date2.getDate();
        return isSameYear(date1, date2) && isSameMonth(date1, date2) && d1 == d2;
    } else {
        return false;
    }
}
export function isSameMonth(date1?: Date, date2?: Date): boolean {
    if (typeof date1 == "string") {
        date1 = new Date(date1);
    }
    if (typeof date2 == "string") {
        date2 = new Date(date2);
    }
    if (date1 && date2) {
        return isSameYear(date1, date2) && date1.getMonth() == date2.getMonth();
    } else {
        return false;
    }
}
export function isSameYear(date1?: Date, date2?: Date): boolean {
    if (typeof date1 == "string") {
        date1 = new Date(date1);
    }
    if (typeof date2 == "string") {
        date2 = new Date(date2);
    }
    if (date1 && date2) {
        return date1.getFullYear() == date2.getFullYear();
    } else {
        return false;
    }
}
export function isSameHour(date1?: Date, date2?: Date): boolean {
    if (typeof date1 == "string") {
        date1 = new Date(date1);
    }
    if (typeof date2 == "string") {
        date2 = new Date(date2);
    }
    if (date1 && date2) {
        return (
            isSameYear(date1, date2) &&
            isSameMonth(date1, date2) &&
            isSameDate(date1, date2) &&
            date1.getHours() == date2.getHours()
        );
    } else {
        return false;
    }
}

export function addDays(date: Date, amount: number): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}
export function subtractDays(date: Date, amount: number): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
}

export function formatDate(date?: Date, patternStr?: any): string {
    if (!patternStr) {
        patternStr = "d/M/yyyy HH:mm";
    }
    if (!date) {
        date = new Date();
    }
    if (typeof date == "string") {
        date = new Date(date);
    }

    const day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        miliseconds = date.getMilliseconds(),
        h = hour % 12,
        hh = twoDigitPad(h),
        HH = twoDigitPad(hour),
        mm = twoDigitPad(minute),
        ss = twoDigitPad(second),
        aaa = hour < 12 ? "AM" : "PM",
        EEEE = dayOfWeekNames[date.getDay()],
        EEE = EEEE.slice(0, 3),
        dd = twoDigitPad(day),
        M = month + 1,
        MM = twoDigitPad(M),
        MMMM = monthNames[month],
        MMM = MMMM.substr(0, 3),
        yyyy = year + "",
        yy = yyyy.substr(2, 2);
    // checks to see if month name will be used
    patternStr = patternStr
        .replace("hh", hh)
        .replace("h", h)
        .replace("HH", HH)
        .replace("H", hour)
        .replace("mm", mm)
        .replace("m", minute)
        .replace("ss", ss)
        .replace("s", second)
        .replace("S", miliseconds)
        .replace("dd", dd)
        .replace("d", day)
        .replace("EEEE", EEEE)
        .replace("EEE", EEE)
        .replace("yyyy", yyyy)
        .replace("yy", yy)
        .replace("aaa", aaa);
    if (patternStr.indexOf("MMM") > -1) {
        patternStr = patternStr.replace("MMMM", MMMM).replace("MMM", MMM);
    } else {
        patternStr = patternStr.replace("MM", MM).replace("M", M);
    }

    return patternStr;
}
