  
  /**
   * @name isAfter
   * @param date1 
   * @param date2 
   */
  export function isAfter(date1: Date, date2: Date): boolean {
    if (date1 && date2) {
      return date1.getTime() > date2.getTime();
    } else {
      return false;
    }
  }
  /**
   * @name isBefore
   * @param date1 
   * @param date2 
   */
  export function isBefore(date1: Date, date2: Date): boolean {
    if (date1 && date2) {
      return date1.getTime() < date2.getTime();
    } else {
      return false;
    }
  }
  /**
   * @name isSameDate
   * @param date1 
   * @param date2 
   */
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
  /**
   * @name isSameMonth
   * @param date1 
   * @param date2 
   */
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
  /**
   * @name isSameYear
   * @param date1 
   * @param date2 
   */
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
  /**
   * @name isSameHour
   * @param date1 
   * @param date2 
   */
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