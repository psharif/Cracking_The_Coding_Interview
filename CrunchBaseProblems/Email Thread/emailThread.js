const emailThread = (arr) => {
  let result = [];
  let threadNumber = 0;
  let hash = {};
  for(let et of arr) {
    const emails = [];
    for(let el of et) {
      let obj = {};
      if(el.indexOf('@') !== -1) {
        emails.push(el);
      }
      else {
        const arr = el.split('---');
        if(arr.length == 1) {
          threadNumber++;
          result.push([threadNumber, 1]);
          hash[arr[0]] = { thread: threadNumber, positions: emails };
        }
        else {
          const threads = [];
          for(let key in hash) {
            if(key == arr[arr.length - 1]) {
              threads.push(hash[key]);
            }
          }
          if(threads.length == 1) {
            result.push([threads[0].thread, arr.length]);
          }
          else{
            for(let obj of threads ) {
              const { positions, thread } = obj;
              if(emails.includes(postions[0]) && emails.includes(positions[1])) {
                result.push(thread, arr.length);
              }
            }
          }
        }
      }
    }
  }
  console.log(result);
}

const input = [['abc@gmail.com', 'x@gmail.com', 'hello x, how are you?'],
['c@gmail.com', 'abc@gmail.com', 'did you take a look at the event'],
['x@gmail.com', 'abc@gmail.com', 'i am great. how are you?---hello x, how are you?'],
['abc@gmail.com', 'y@gmail.com', 'hello x, how are you?'],
['abc@gmail.com', 'y@gmail.com', 'I am good---hello x, how are you?']];

emailThread(input);
