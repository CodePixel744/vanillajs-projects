# Learning TypeScript and Date Object

## TypeScript Basics
### Creating a Date Object:
```typescript
let now: Date = new Date();
console.log(now);
```

### Common Methods:
- `getFullYear()`: Gets the year.
- `getMonth()`: Gets the month (0-11).
- `getDate()`: Gets the day of the month (1-31).
- `getHours()`: Gets the hour (0-23).
- `getMinutes()`: Gets the minutes (0-59).
- `getSeconds()`: Gets the seconds (0-59).

### Example:
```typescript
let birthday: Date = new Date(1990, 6, 15); // July 15, 1990
console.log(birthday.getFullYear()); // 1990
console.log(birthday.getMonth()); // 6 (July)
console.log(birthday.getDate()); // 15
```

5 april 2002 is birthday then age at 6 jan 2004 is:
first calculate the difference between the two dates
```typescript
let birthday: Date = new Date(2002, 3, 5); // April 5, 2002
let today: Date = new Date(2004, 0, 6); // January 6, 2004
let difference: number = today.getTime() - birthday.getTime();
```
then convert the difference to years
```typescript
let age: number = difference / (1000 * 60 * 60 * 24 * 365.25);
console.log(Math.floor(age)); // 1
```