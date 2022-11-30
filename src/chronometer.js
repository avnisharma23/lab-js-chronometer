class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if(printTimeCallback)
        {
          printTimeCallback();
        }
      }, 1000);
    
        
       
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    this.minutes = minutes;
    return this.minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let  stringValue = "";
    
    if(value < 10)
    {
      stringValue =  value.toString().padStart(2,'0');
      //console.log(stringValue);
      return stringValue;
    }
    else
    {
      stringValue = value.toString();
      console.log(stringValue);
      return stringValue;
    }
  }


  stop() {
    // ... your code goes here
      
      clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let currentMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let currentSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let splitTime = `${currentMinutes}:${currentSeconds}`
    return splitTime;
  }
}
