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
        return 'tie';
    else if (choice === 'paper' && aiChoice === 'paper')
        return 'tie';
    else if (choice === 'scissors' && aiChoice === 'scissors')
        return 'tie';
    else if (choice === 'rock' && aiChoice === 'paper')
        return 'loss';
    else if (choice === 'scissors' && aiChoice ==='rock')
        return 'loss';
    else if (choice === 'paper' && aiChoice === 'scissors')
        return 'loss';
    else if (choice === 'rock' && aiChoice === 'scissors')
        return 'win';
    else if (choice === 'paper' && aiChoice === 'rock')
        return 'win';
    else if (choice === 'scissors' && aiChoice === 'paper')
        return 'win';
    else
        return 'broken';
}
alert('This is a game of rock paper scissors, best of 3.')
let i = 0;
let j = 0;

function game()
{
while(i<3 && j < 3)
{
    ai = getComputerChoice();
    you = getPlayerChoice();
    if (play(ai, you) === 'win')
    {
        i++;
        alert('You Win! The score is now: Player: '+i+' Computer: '+j);
    }
    else if (play(ai, you) === 'loss')
    {
        j++;
        alert('You Lose! The score is now: Player: '+i+' Computer: '+j);
    }
    else if(play(ai, you) === 'tie')
        alert('Tie. The score is still: Player: '+i+' Computer: '+j);
    else
        alert('Please check your input, remember no caps allowed.')
}
}
let k = 'yes';
while(k === 'yes')
{
    game();
    i = 0;
    j = 0;
    k = prompt('Would you like to play again? Enter \'yes\' to play again.')
}