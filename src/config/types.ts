export type DateIndex = "months" | "years" | "minutes" | "hours" | "days";
export type DateGetter =
  | "getHours"
  | "getMinutes"
  | "getFullYear"
  | "getMonth"
  | "getDate";
export type DateSetter =
  | "setFullYear"
  | "setMinutes"
  | "setHours"
  | "setMonth"
  | "setDate";
export type DateFunc = DateSetter | DateGetter;