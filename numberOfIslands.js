// https://leetcode.com/problems/number-of-islands/
const exploreIsland = (grid, row, col) => {
  // mark each 1 found a 0, continue until no more 1's are found
  if (grid[row][col] === '1') {
    grid[row][col] = '0';
    if (row + 1 < grid.length) exploreIsland(grid, row+1, col);
    if (row - 1 > -1) exploreIsland(grid, row-1, col);
    if (col + 1 < grid[0].length) exploreIsland(grid, row, col + 1);
    if (col - 1 > -1) exploreIsland(grid, row, col - 1);
  }
};

const numIslands = grid => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        // if 1 is found, add an island and explore
        count++;
        exploreIsland(grid, i, j);
      }
    }
  }
  return count;
};