const formatFollowerNum = (num) => {
  let result = 0;
  let unit = '';

  if (num >= 1000000) {
    result = Math.floor(num / 10000) / 100;  
    unit = 'M';
  } else if (num >= 1000) {
    result = Math.floor(num / 10) / 100;
    unit = 'K';
  }
  
  return result.toString() + unit;
}

export { formatFollowerNum };