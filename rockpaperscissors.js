
let i = 0;
let j = 0;

const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
rock.addEventListener('click', () => {
    play('rock', getComputerChoice());
    
})
paper.addEventListener('click', () => {
    play('paper', getComputerChoice());
   
})
scissors.addEventListener('click', () =>
{
    play('scissors', getComputerChoice());
    
})






//Function uses Math functions to randomize return value.
function getComputerChoice () {
    let array = ['rock', 'paper', 'scissors'];
    let ret = Math.floor(Math.random()*array.length);
    console.log(array[ret]);
    return array[ret];

}


//Function checks to see if 3 wins have been achieved and resets the counter
function checkWinner(i, j)
{
    if (i ===3 || j === 3)
{
    if (i === 3)
    {
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You beat the computer! The score was: Player: '+i+' Computer: '+j);
        newDiv.classList = 'win';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 2400);
        i = 0;
        j = 0;
    }
    else if (j === 3)
    {
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You lost to the computer! The score was: Player: '+i+' Computer: '+j);
        newDiv.classList = 'loss';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 2400);
    }
    return true;
}
}


//Function executes the play mechanic by checking user button pressed
//   .. vs the AI choice. Then pops up a message displaying tie or no tie.
function play(aiChoice, choice)
{
    if (choice === 'rock' && aiChoice === 'rock')
    {
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Tied! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'tie';
    }
    else if (choice === 'paper' && aiChoice === 'paper')
    {
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Tied! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'tie';
    }
    else if (choice === 'scissors' && aiChoice === 'scissors')
    {
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Tied! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'tie';
    }
    else if (choice === 'rock' && aiChoice === 'paper')
    {
        j++;
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Lost! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'loss';
    }
    else if (choice === 'scissors' && aiChoice ==='rock')
    {
        j++;
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Lost! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'loss';
    }
    else if (choice === 'paper' && aiChoice === 'scissors')
    {
        j++;
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Lost! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'loss';
    }
    else if (choice === 'rock' && aiChoice === 'scissors')
    {
        i++;
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Won! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'win';
    }
    else if (choice === 'paper' && aiChoice === 'rock')
    {
        i++;
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Won! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'win';
    }
    else if (choice === 'scissors' && aiChoice === 'paper')
    {
        i++;
        const newDiv = document.createElement('div');
        const container = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        newDiv.textContent = ('You Won! The score is now: Player: '+i+' Computer: '+j);
        newDiv.classList = 'new';
        body.insertBefore(newDiv, container);
        setTimeout(() => {
            newDiv.remove();
        }, 1200);
        if (checkWinner(i, j))
        {
        i = 0; j = 0;
        }
        return 'win';
    }
    else
        return 'broken';
}
