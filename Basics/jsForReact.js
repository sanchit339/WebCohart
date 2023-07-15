/*
    credits :- https://www.youtube.com/watch?v=m55PTVUrlnA
*/

// Arrow Functions 
function DoSomeThing()
{

}

const DoSomeThing = () =>{ // this is important while defining Components

}

<button onClick = { () => {  // created an anonmyous  Function
    console.log("hello world") 
}}>
</button> 

// ternary operators
let age = 16;
let name = age > 10 ? "Snax" : "IND";

// in code 

const Component = () => {
    return age > 10 ? <div>Windows</div> : <div>MacBook</div>;
}

//Object and Destructure
const person = {
    names: "Pedro",
    ages: 20,
    isMarried: false,
};

//normally 
const pName = person.names
const pAge = person.ages

// destructure
const {names , ages} = person
console.log(names)

//copy constructor
const person2 = {...person , names : "Jack"}

// for arrays
const names1 = ["Pedro", "Jack", "Jessica"]
const names2 = [ ...name1, "Joel"]; // copy from the names


// additional Function 

/*
 .map {just like loop}
 .filter {as name suggests}
 .reduce 
*/

let names3 = ["Pedro", "Jack", "Jessica"]

names3.map((it) => {   // () will hold arguments
    console.log(it);
})

// editing
names3.map((it) => {   // () will hold arguments
    return it + " "; // added apace 
})

// In Code 
names3.map((it) => {
    return <h1>it</h1>; //usefull in tables
})

// filter
names3.filter(()=>{
    return it !== "sanchit";
})