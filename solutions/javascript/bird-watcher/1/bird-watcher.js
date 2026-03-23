// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum=0;
  
  for (let i= 0; i < birdsPerDay.length; i++){
    sum += birdsPerDay[i];
  }
  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let sum = 0;
  let startDay = (week - 1) * 7;
  let endDay = startDay + 7;

  for (let i = startDay; i < endDay; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  // Mulai dari 0, lalu loncat 2 langkah (0, 2, 4, ...)
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1; // Tambahkan 1 burung yang sembunyi tadi
  }
  return birdsPerDay;
}