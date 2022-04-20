const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];




// console.log(editUser(users, "Thomas", { name: "Vaibhav Haldia", scores: 55, skills: null, age: 23 }));


function scoresGreaterThan85(data) {
    return data.filter(({ scores }) => scores > 85);
}
console.log(scoresGreaterThan85(users));

// ---

function addUser(data, { name, scores, skills, age }) {
    const username = name;
    const existingUser = data.some(({ name }) => name === username);
    if (existingUser) throw "user already exists";
    const user = { name, scores, skills, age };
    data.push(user);
    return user;
}
// console.log(addUser(users, { name: "Neo", scores: 91, skills: ['binary manipulations'], age: 36 }));


// ---

function addUserSkill(data, user, skill) {
    const existingUser = data.some(({ name }, index, arr) => {
        const result = name === user;
        if (result) data[index].skills.push(skill);
        return result;
    });
    if (!existingUser) return false;
    return true;
}

// console.log(addUserSkill(users, 'Thomas', 'stopping Bullets'));


function editUser(data, username, user) {
    const existingUser = data.some(({ name }, index, arr) => {
        const result = name === username;
        if (result) data[index] = user;
        return result;
    });
    if (!existingUser) return false;
    return true;
}

console.log(editUser(users, "Thomas", { name: "Neo", scores: 75, skills: "Fly", age: 36 }));

