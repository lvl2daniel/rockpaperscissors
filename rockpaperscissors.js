function getComputerChoice () {
    let array = ['rock', 'paper', 'scissors'];
    let ret = Math.floor(Math.random()*array.length);
    console.log(array[ret]);
    return array[ret];

}

function getPlayerChoice(){
let choice = prompt("Choose \'rock\', \'paper\', or \'scissors\'.");
return choice;
}

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
        return 'win';
    }
    else
        return 'broken';
}
alert('This is a game of rock paper scissors, best of 3.')
let i = 0;
let j = 0;



function game()
{

    ai = getComputerChoice();
    you = getPlayerChoice();
    const body = document.querySelector('body');
    if (play(ai, you) === 'win')
    {
        i++;
        const newDiv = document.createElement('div');
        newDiv.textContent = ('You Win! The score is now: Player: '+i+' Computer: '+j);
        newDiv.insertBefore('.container')
        console.log('win');
    }
    else if (play(ai, you) === 'loss')
    {
        j++;
        alert('You Lose! The score is now: Player: '+i+' Computer: '+j);
        console.log('lose');
    }
    else if(play(ai, you) === 'tie')
    {
        alert('Tie. The score is still: Player: '+i+' Computer: '+j);
        console.log('tie');
    }
    else
        alert('Please check your input, remember no caps allowed.')
        console.log('ran');
}
let k = 'yes';
/*while(k === 'yes')
{
    game();
    i = 0;
    j = 0;
    k = prompt('Would you like to play again? Enter \'yes\' to play again.')
}*/

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

