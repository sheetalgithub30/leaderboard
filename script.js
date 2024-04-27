var scores = [
  {
    firstName: "Prachi",
    lastName: "Sharma",
    country: "India",
    score: 90,
    date: "March 27: 2024 12:52:33",
  },
  {
    firstName: "Rohan",
    lastName: "Raj",
    country: "India",
    score: 75,
    date: "April 26: 2024 10:52:33",
  },
  {
    firstName: "Shyam",
    lastName: "Kumar",
    country: "India",
    score: 20,
    date: "May 25: 2024 11:51:33",
  },
];

function comparatorT(a, b) {
  if (a["score"] > b["score"]) {
    return -1;
  } else if (b["score"] > a["score"]) {
    return 1;
  } else {
    return 0;
  }
}

function displayData(data) {
  let main = document.getElementById("info");
  main.innerHTML = "";
  data.sort(comparatorT);
  data.forEach((item, index) => {
    let box = document.createElement("div");
    box.classList.add("row");
    const name_date = document.createElement("div");

    name_date.innerHTML = `
       <div>
          <p class="">${item.firstName}&nbsp;${item.lastName}</p>
          <p class="dates">${item.date}</p>
      </div>`;

    let country = document.createElement("p");
    country.innerText = item["country"];

    let score = document.createElement("p");
    score.innerText = item["score"];

    let delete1 = document.createElement("button");
    delete1.innerText = "❌";
    delete1.addEventListener("click", () => deleteScore(index));

    let plus5 = document.createElement("button");
    plus5.innerText = "➕5";
    plus5.addEventListener("click", () => incrementScore(index));

    let minus5 = document.createElement("button");
    minus5.innerText = "➖5";
    minus5.addEventListener("click", () => decrementScore(index));

    box.append(name_date);
    box.append(country);
    box.append(score);
    box.append(delete1);
    box.append(plus5);
    box.append(minus5);

    main.append(box);

  });
}

function deleteScore(index) {
  scores.splice(index, 1);
  displayData(scores);
}

function incrementScore(index) {
  scores[index]["score"] += 5;
  displayData(scores);
}
function decrementScore(index) {
  scores[index]["score"] -= 5;
  displayData(scores);
}

function addData(fname, lname, score, country, date) {
  let obj = {
    firstName: fname,
    lastName: lname,
    score,
    country,
    date,
  };
  scores.push(obj);
  displayData(scores);
}

window.addEventListener("load", () => {
  let para = document.getElementById("para");
  displayData(scores);
  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let country = document.getElementById("country").value;
    let score = parseInt(document.getElementById("score").value);

    if (fname === "" || lname === "" || country === "" || score === "") {
      para.style.display = "block";
      return;
    } 
    else {
      para.style.display = "none";
      const date = generateDateAndTime();
      addData(fname, lname, score, country, date);
    }
  });
});

function generateDateAndTime() {
  let dateObject = new Date();
  let month = dateObject.toLocaleString("default", { month: "long" });
  (day = dateObject.getDate()),
    (year = dateObject.getFullYear()),
    (time = dateObject.toLocaleTimeString().slice(0, 8));
  let generateResult = `${month} ${day}: ${year} ${time}`;

  return generateResult;
}
