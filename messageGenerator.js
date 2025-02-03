let weather = ["rainy", "sunny", "windy", "hot", "cold", "stormy", "freezing"];
let emotion = ["happy", "excited", "silly", "calm", "grumpy", "energetic", "curious"];
let animal = ["elephant", "fox", "penguin", "squirrel", "dog", "cat", "rabbit"];


const generateMessage = () => {
    let num1 = Math.floor(Math.random() * weather.length)
    let num2 = Math.floor(Math.random() * emotion.length)
    let num3 = Math.floor(Math.random() * animal.length)
    let condition1 = weather[num1];
    let condition2 = emotion[num2];
    let condition3 = animal[num3];
    
    return `On a ${condition1} day, a ${condition3} felt incredibly ${condition2} and couldn't help but celebrate. It ran through the fields, enjoying every moment, because nothing made a day better than a little bit of ${condition1} fun!`;
    }

console.log(generateMessage());