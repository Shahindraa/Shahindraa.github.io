function minMaxAvg(minimumNum, maximumNum){
    var min = minimumNum;
    var max = maximumNum;
    var avg = (minimumNum + maximumNum)/2;
    var values = [min, max, avg];
    return values;
  }
  let Result = minMaxAvg(5,27)
  document.write('The Minimum, Maximum and Average values of the numbers provided are: <br>' + Result + ' <br>')