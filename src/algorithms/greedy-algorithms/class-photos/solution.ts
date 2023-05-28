// O(nlog(n)) Time | O(1) Space
// n = number of students
export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
  for (let idx = 0; idx < redShirtHeights.length; idx++) {
      const redShirtHeight = redShirtHeights[idx];
      const blueShirtHeight = blueShirtHeights[idx];

      if (shirtColorInFirstRow === 'RED') {
          if (redShirtHeight >= blueShirtHeight) return false;
      } else if (blueShirtHeight >= redShirtHeight) return false;
  }

  return true;
}
