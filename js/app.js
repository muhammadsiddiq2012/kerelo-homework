// 15--misol
let products = ["mouse", "laptop", "monitor", "keyboard"];

console.log(products.includes("laptop"));
console.log(products.indexOf("laptop"));


// 16 misol -
let books = ["O'tkan kunlar", "Ikki eshik orasi", "Mehrobdan chayon", "Dunyoning ishlari"];

let result = books.slice(0, 3);

console.log(result.join(", "));
// 17-misol
let studentName = "Kamola";
let studentArray = studentName.split("");
console.log(studentArray.reverse().join(""));


// 18-misol
let names18 = ["Sardor", "Aziz", "Malika", "Sardor", "Diyor"];
console.log(names18.indexOf("Sardor"));
console.log(names18.lastIndexOf("Sardor"));


// 19-misol
let front = "HTML,CSS";
let tools = "React,Vite";
let frontArray = front.split(",");
let toolsArray = tools.split(",");
console.log(frontArray.concat(toolsArray));


// 20-misol
let message = "Bugun dars juda qiziqarli bo‘ldi";
let messageArray = message.split(" ");
console.log(messageArray.reverse().join(" "));


// 21-misol
let cart = ["apple", "cheese", "tea"];
cart.unshift("bread");
cart.push("milk");
console.log(cart.join(" | "));


// 22-misol
let films = ["Up", "Coco", "Inside Out", "Soul", "Luca"];
let firstFilms = films.slice(0, 2);
console.log(firstFilms.reverse());


// 23-misol
let username = "diyor_dev";
console.log(username.includes("_"));
console.log(username.indexOf("_"));


// 24-misol
let scores = [67, 91, 78, 100, 54];
console.log(scores.sort((a, b) => a - b));
console.log(scores.sort((a, b) => b - a));


// 25-misol
let students = ["Ziyoda", "Akmal", "Diyor", "Madina"];
console.log(students.sort().join(", "));


// 26-misol
let codes = ["UZ-11", "UZ-12", "UZ-13"];
console.log(codes.shift());
codes.unshift("UZ-10");
console.log(codes);


// 27-misol
let a27 = "book";
let b27 = "computer";
let c27 = "developer";
console.log(a27.length);
console.log(b27.length);
console.log(c27.length);


// 28-misol
let slogan = ["Learn", "Build", "Repeat"];
console.log(slogan.join(" "));


// 29-misol
let tickets = [501, 502, 503, 502, 504];
console.log(tickets.includes(502));
console.log(tickets.indexOf(502));
console.log(tickets.lastIndexOf(502));


// 30-misol
let guests = ["Lola", "Nodira", "Sevara"];
guests.unshift("Ali");
guests.push("Vali");
console.log(guests.length);


// 31-misol
let tags = ["Learn", "JavaScript"];
console.log("#" + tags.join(""));


// 32-misol
let chat = "Men bugun yangi metod o‘rgandim";
let chatArray = chat.split(" ");
console.log(chatArray.reverse().join(" "));


// 33-misol
let catalogA = ["phone", "laptop"];
let catalogB = ["tablet", "camera", "watch"];
let catalog = catalogA.concat(catalogB);
console.log(catalog.includes("tablet"));
console.log(catalog.sort());


// 34-misol
let results = [72, 95, 88, 61, 100, 84];
results.sort((a, b) => b - a);
console.log(results);
console.log(results.slice(0, 3));


// 35-misol
let fullName = "Shahzoda";
let fullNameArray = fullName.split("");
console.log(fullNameArray);
console.log(fullNameArray.includes("a"));


// 36-misol
let stationery = ["pen", "ruler", "notebook", "pen", "eraser"];
console.log(stationery.indexOf("pen"));
console.log(stationery.lastIndexOf("pen"));
console.log(stationery.join(", "));


// 37-misol
let monday = ["reading", "coding", "practice"];
let tuesday = ["revision", "project", "quiz"];
let week = monday.concat(tuesday);
console.log(week.slice(0, 4));
console.log(week.reverse());


// 38-misol
let clue = "Find the hidden treasure under the old tree";
let clueArray = clue.split(" ");
console.log(clueArray.includes("treasure"));
console.log(clueArray.indexOf("treasure"));


// 39-misol
let rooms = [12, 3, 25, 7, 18];
rooms.sort((a, b) => a - b);
console.log(rooms);
console.log(rooms.join("-"));


// 40-misol
let person = "Madina Karimova";
let personArray = person.split(" ");
console.log(personArray[0]);
console.log(personArray[1]);


// 41-misol
let queue = ["Ali", "Zebo", "Jasur"];
console.log(queue.shift());
queue.push("Vali");
console.log(queue.join(", "));


// 42-misol
let sentence = "banana apple cherry orange";
let sentenceArray = sentence.split(" ");
console.log(sentenceArray.sort().join(" "));


// 43-misol
let passwordHint = "qwerty";
let passwordArray = passwordHint.split("");
console.log(passwordArray.reverse().join(""));


// 44-misol
let stops = ["Center", "Museum", "Airport", "Park"];
console.log(stops.includes("Airport"));
console.log(stops.indexOf("Airport"));
console.log(stops.lastIndexOf("Airport"));
console.log(stops.join(" - "));


// 45-misol
let english = ["apple", "book"];
let uzbek = ["olma", "kitob"];
let words = english.concat(uzbek);
console.log(words.join(" / "));


// 46-misol
let keyword = "algorithm";
let keywordArray = keyword.split("");
console.log(keywordArray.length);
console.log(keywordArray.reverse());


// 47-misol
let playlist = ["Song A", "Song B", "Song C"];
console.log(playlist.shift());
playlist.unshift("Song D");
console.log(playlist.join(", "));


// 48-misol
let ratings = [4, 5, 3, 4];
ratings.push(5);
ratings.sort((a, b) => b - a);
console.log(ratings);
console.log(ratings.slice(0, 2));


// 49-misol
let reminder = "We will finish the project tomorrow";
let reminderArray = reminder.split(" ");
console.log(reminderArray.includes("tomorrow"));
console.log(reminderArray.indexOf("tomorrow"));


// 50-misol
let tasks = ["decorations", "music", "invitations"];
let extra = ["photos", "snacks", "guest list"];
tasks.unshift("planning");
tasks.push("cleaning");
let allTasks = tasks.concat(extra);
console.log(allTasks.sort().join(" | "));