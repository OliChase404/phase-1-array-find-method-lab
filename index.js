// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ]
  

  function superBowlWin1(){
    for(let i = record.length - 1; i >= 0; i--){
        if (record[i].result === "W"){
            return `The Broncos Won the SuperBowl in ${record[i].year}`
        }
    }
  }

  function superbowlWin(x){
    const win = x.find((y) => y.result === "W")
    return win ? win.year : undefined
  }

  function superBowlWin3(){
    for(x of record){
        if (x.result === "W"){
            return x.year
        }
    }
  }

console.log(superbowlWin(record))