
 // 1-misol
let products = ["mouse", "laptop", "monitor", "keyboard"];
console.log(products.includes("laptop"));
console.log(products.indexOf("laptop"));

// 2-misol
let books = ["Otkan kunlar", "Ikki eshik orasi", "Mehrobdan chayon", "Dunyoning ishlari"];
let a = books.slice(0, 3);
console.log(a.join(", "));

// 3-misol
let studentName = "Kamola";
let b = studentName.split("");
b.reverse();
console.log(b.join(""));

// 4-misol
let names = ["Sardor", "Aziz", "Malika", "Sardor", "Diyor"];
console.log(names.indexOf("Sardor"));
console.log(names.lastIndexOf("Sardor"));

// 5-misol
let front = "HTML,CSS";
let tools = "React,Vite";
let c = front.split(",");
let d = tools.split(",");
console.log(c.concat(d));

// 6-misol
let message = "Bugun dars juda qiziqarli boldi";
let e = message.split(" ");
e.reverse();
console.log(e.join(" "));

// 7-misol
let cart = ["apple", "cheese", "tea"];
cart.unshift("bread");
cart.push("milk");
console.log(cart.join(" | "));

// 8-misol
let films = ["Up", "Coco", "Inside Out", "Soul", "Luca"];
let f = films.slice(0, 2);
f.reverse();
console.log(f);

// 9-misol
let username = "diyor_dev";
console.log(username.includes("_"));
console.log(username.indexOf("_"));

// 10-misol
let scores = [67, 91, 78, 100, 54];
scores.sort((a, b) => a - b);
console.log(scores);
scores.sort((a, b) => b - a);
console.log(scores);

// 11-misol
let students = ["Ziyoda", "Akmal", "Diyor", "Madina"];
students.sort();
console.log(students.join(", "));

// 12-misol
let codes = ["UZ-11", "UZ-12", "UZ-13"];
codes.shift();
codes.unshift("UZ-10");
console.log(codes);

// 13-misol
let word1 = "book";
let word2 = "computer";
let word3 = "developer";
console.log(word1.length);
console.log(word2.length);
console.log(word3.length);

// 14-misol
let slogan = ["Learn", "Build", "Repeat"];
console.log(slogan.join(" "));

// 15-misol
let tickets = [501, 502, 503, 502, 504];
console.log(tickets.includes(502));
console.log(tickets.indexOf(502));
console.log(tickets.lastIndexOf(502));

// 16-misol
let guests = ["Lola", "Nodira", "Sevara"];
guests.unshift("Ali");
guests.push("Vali");
console.log(guests.length);

// 17-misol
let tags = ["Learn", "JavaScript"];
console.log("#" + tags.join(""));

// 18-misol
let chat = "Men bugun yangi metod organdim";
let g = chat.split(" ");
g.reverse();
console.log(g.join(" "));

// 19-misol
let catalogA = ["phone", "laptop"];
let catalogB = ["tablet", "camera", "watch"];
let h = catalogA.concat(catalogB);
console.log(h.includes("tablet"));
h.sort();
console.log(h);

// 20-misol
let results = [72, 95, 88, 61, 100, 84];
results.sort((a, b) => b - a);
console.log(results.slice(0, 3));

// 21-misol
let fullName = "Shahzoda";
let i = fullName.split("");
console.log(i.includes("a"));

// 22-misol
let stationery = ["pen", "ruler", "notebook", "pen", "eraser"];
console.log(stationery.indexOf("pen"));
console.log(stationery.lastIndexOf("pen"));
console.log(stationery.join(", "));

// 23-misol
let monday = ["reading", "coding", "practice"];
let tuesday = ["revision", "project", "quiz"];
let j = monday.concat(tuesday);
console.log(j.slice(0, 4));
j.reverse();
console.log(j);

// 24-misol
let clue = "Find the hidden treasure under the old tree";
let k = clue.split(" ");
console.log(k.includes("treasure"));
console.log(k.indexOf("treasure"));

// 25-misol
let rooms = [12, 3, 25, 7, 18];
rooms.sort((a, b) => a - b);
console.log(rooms.join("-"));

// 26-misol
let person = "Madina Karimova";
let l = person.split(" ");
console.log(l[0]);
console.log(l[1]);

// 27-misol
let queue = ["Ali", "Zebo", "Jasur"];
queue.shift();
queue.push("Vali");
console.log(queue.join(", "));

// 28-misol
let sentence = "banana apple cherry orange";
let m = sentence.split(" ");
m.sort();
console.log(m.join(" "));

// 29-misol
let passwordHint = "qwerty";
let n = passwordHint.split("");
n.reverse();
console.log(n.join(""));

// 30-misol
let stops = ["Center", "Museum", "Airport", "Park"];
console.log(stops.includes("Airport"));
console.log(stops.indexOf("Airport"));
console.log(stops.lastIndexOf("Airport"));
console.log(stops.join(" - "));

// 31-misol
let english = ["apple", "book"];
let uzbek = ["olma", "kitob"];
let o = english.concat(uzbek);
console.log(o.join(" / "));

// 32-misol
let keyword = "algorithm";
let p = keyword.split("");
console.log(p.length);
p.reverse();
console.log(p);

// 33-misol
let playlist = ["Song A", "Song B", "Song C"];
playlist.shift();
playlist.unshift("Song D");
console.log(playlist.join(", "));

// 34-misol
let ratings = [4, 5, 3, 4];
ratings.push(5);
ratings.sort((a, b) => b - a);
console.log(ratings.slice(0, 2));

// 35-misol
let reminder = "We will finish the project tomorrow";
let q = reminder.split(" ");
console.log(q.includes("tomorrow"));
console.log(q.indexOf("tomorrow"));

// 36-misol
let tasks = ["decorations", "music", "invitations"];
let extra = ["photos", "snacks", "guest list"];
tasks.unshift("planning");
tasks.push("cleaning");
let r = tasks.concat(extra);
r.sort();
console.log(r.join(" | "));
