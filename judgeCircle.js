//https://leetcode.com/problems/judge-route-circle/description/
const judgeCircle = moves => {
  let x = 0,
    y = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i].toUpperCase()) {
      case 'U': {
        y++;
        break;
      }
        case 'D': {
        y--;
        break;
      }
        case 'L': {
        x--;
        break;
      }
      case 'R': {
        x++;
        break;
      }
    }
  }
  return x === 0 && y === 0;
};