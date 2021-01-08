  /**
   * @name fromNow
   * @param date 
   */
  export function fromNow(date: Date | number | string) {
   
    const now = +new Date();
    // calculate the from now

    try {
      if (typeof date === "string") {
        date = +new Date(date);
      }
      if (date instanceof Date) {
        let _date = date as Date
        date = +new Date(_date);
      }
      // calc seconds since
      const diff = now - date;
      const secondsDiff = diff / 1000;
      const minsDiff = secondsDiff / 60;
      const hoursDiff = minsDiff / 60;
      const daysDiff = hoursDiff / 24;
      const weekDiff = Math.floor(daysDiff / 7);
      const monthDiff = Math.floor(weekDiff / 3.5);
      const yearDiff = Math.floor(monthDiff / 12);
      if (date < now) {
        const xref: Record<string, number> = {
          year: yearDiff,
          month: monthDiff,
          week: weekDiff,
          day: daysDiff,
          hour: daysDiff,
          minute: minsDiff,
          second: secondsDiff,
        };
        let isFirst = false;
        let str = "";
        for (const property in xref) {
          let val = xref[property];
          if (val > 0 && !isFirst) {
            val = Math.round(val);
            isFirst = true;
            str += `${val == 1 ? "a" : val} ${property}${
              val > 1 ? "s" : ""
            } ago `;
          }
        }
        str = str.trim();
        if (str === "a day ago") {
          str = "yesterday";
        }

        return str;
      }
    } catch (error) {
      console.error("failed to parse date", error);
    }
  }