const user = {
    name: "Isabella Garcia",
    age: 20,
    profession: "Software Developer",

    address: {
        city: "Toronto",
        country: "Canada"
    },

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ],

    image:
        "https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg"
};

// Object destructuring
const {
    name,
    age,
    profession,
    image,
    address: { city },
    skills
} = user;

// Array destructuring
const [firstSkill, secondSkill, thirdSkill] = skills;

document.querySelector("#profile-image").src = image;
document.querySelector("#profile-name").textContent = name;
document.querySelector("#profile-age").textContent = `Age: ${age}`;
document.querySelector("#profile-job").textContent = `Profession: ${profession}`;
document.querySelector("#profile-city").textContent = `City: ${city}`;

const skillsList = document.querySelector("#skills-list");

[firstSkill, secondSkill, thirdSkill].forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});