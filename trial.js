
let age = parseInt(prompt('Enter your age'))

if (age >= 18)
{
    alert('You are old enough to drive.')
}

else{
    alert(`You are left with ${18-age} years to drive.`)
}

//Question 2
let myAge = parseInt(prompt('Enter my age'));
let yourAge = parseInt(prompt('Enter your age'));
let ageDifference = myAge - yourAge;

if (ageDifference > 0) {
    alert(`I'm ${ageDifference} years older than you.`);
} else if (ageDifference < 0) {
    alert(`You are ${Math.abs(ageDifference)} years older than me.`);
} else {
    alert("We are the same age.");
}

//Question 3
// if else
let a = parseInt( prompt('Enter first number'))
let b = parseInt( prompt('enter the second nubmebr'))

if(a > b)
{
    alert('a is greater than b')

}
else if (a < b) {
  alert('a is less than b');
} else {
  alert('a is equal to b');
}

//tenary
let aa = parseInt( prompt('Enter first number'))
let bb = parseInt( prompt('enter the second nubmebr'))


let result = aa > bb ? ' a is greater than b' : 'a is less than b'
 alert(result)

 // question 4
 let number = parseInt(prompt('enter number'))
let checks = number % 2

 if (checks === 0)
{
    alert('The number is even number')
}
else {
    alert('The number is an odd number')
}1


//Level 2

let grade = prompt('Enter your grade')
if (grade >= 80  && grade <= 100)
{alert('You had A')}

else if (grade >= 70 &&  grade < 80)
 {alert('You hda B')}

else if (grade >= 60 &&  grade < 70)
 {alert('You hda C')}

else if (grade >= 50 &&  grade < 60)
 {alert('You hda D')}

else if (grade <= 49 && grade >= 0)
 {alert('You had fail')}
