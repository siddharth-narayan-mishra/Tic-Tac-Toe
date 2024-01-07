let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")

let confetti = document.getElementById('confetti-container')
let line=document.getElementById('line');
let whoStart = document.getElementById("whoStartsPrompt");
let playerStart=document.getElementById('player-start')
let compStart=document.getElementById('comp-start')
let playAgain = document.getElementById('playAgain');
let pvpBox=document.getElementById('pvp-box')
let pvp = document.getElementById('pvp')
let pve= document.getElementById('pve')


let playerArray=[];
let compArray=[];

let gameOver = false;
let displayResult = document.getElementById('result')

function checkWin(array){
    if (array.includes(1)&&array.includes(2)&&array.includes(3)){
        line.style.top='17.5%'
        line.style.display='block'
        return true;
    }else if(array.includes(4)&&array.includes(5)&&array.includes(6)){
        line.style.display='block'        
        return true;
    }else if(array.includes(7)&&array.includes(8)&&array.includes(9)){
        line.style.display='block'
        line.style.top='83.5%'
        return true;
    }else if(array.includes(1)&&array.includes(4)&&array.includes(7)){
        line.style.display='block'
        line.style.transform='rotate(90deg)';
        line.style.left='-34%';
        return true;
    }else if(array.includes(2)&&array.includes(5)&&array.includes(8)){
        line.style.display='block'
        line.style.left='0%';
        line.style.transform='rotate(90deg)';
        return true;
    }else if(array.includes(3)&&array.includes(6)&&array.includes(9)){
        line.style.display='block'
        line.style.left='34%';
        line.style.transform='rotate(90deg)';
        return true;
    }else if(array.includes(3)&&array.includes(5)&&array.includes(7)){
        line.style.display='block'
        line.style.left='0%';
        line.style.transform='rotate(135deg)';
        return true;
    }else if(array.includes(1)&&array.includes(5)&&array.includes(9)){
        line.style.display='block'
        line.style.left='0%';
        line.style.transform='rotate(45deg)';
        return true;
    }else{
        return false;
    }
}

function winLose() {
    if (checkWin(playerArray)) {
        gameOver=true;
        confetti.style.display='block';
        displayResult.innerText='YOU WIN!!!';
        displayResult.style.display='flex';
        playAgain.style.display='block';
    } else if(checkWin(compArray)){
        gameOver=true;
        displayResult.style.display='flex';
        displayResult.innerText='YOU LOSE!!!'
        playAgain.style.display='block';
    }else if(playerArray.length+compArray.length==9){
        gameOver=true;
        displayResult.style.display='flex';
        displayResult.innerText='DRAW'
        playAgain.style.display='block';
    }else if(checkWin(player1Array)){
        gameOver=true;
        displayResult.style.display='flex';
        displayResult.innerText='PLAYER 1 WINS!!!'
        playAgain.style.display='block';
        confetti.style.display='block';
    }else if(checkWin(player2Array)){
        gameOver=true;
        displayResult.style.display='flex';
        displayResult.innerText='PLAYER 2 WINS!!!'
        playAgain.style.display='block';
        confetti.style.display='block';
    }else if(player1Array.length+player2Array.length==9){
        gameOver=true;
        displayResult.style.display='flex';
        displayResult.innerText='DRAW'
        playAgain.style.display='block';
    }
}

function compMoveO(){
    let position = Math.floor(Math.random()*9)+1;
    if (!((playerArray.includes(position))||(compArray.includes(position)))) {
        switch (position) {
            case 1:
                one.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            case 2:
                two.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            case 3:
                three.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            case 4:
                four.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            case 5:
                five.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            case 6:
                six.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            case 7:
                seven.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            case 8:
                eight.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            case 9:
                nine.innerHTML='<i class="fa-solid fa-o">'
                break;
        
            default:
                break;
        }
        compArray.push(position);
        winLose()
    }else{
        if (compArray.length+playerArray.length<9&&!gameOver) {
            compMoveO();
        }
    }
}

function compMoveX(){
    let position = Math.floor(Math.random()*9)+1;
    if (!((playerArray.includes(position))||(compArray.includes(position)))) {
        switch (position) {
            case 1:
                one.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            case 2:
                two.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            case 3:
                three.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            case 4:
                four.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            case 5:
                five.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            case 6:
                six.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            case 7:
                seven.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            case 8:
                eight.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            case 9:
                nine.innerHTML='<i class="fa-solid fa-x">'
                break;
        
            default:
                break;
        }
        compArray.push(position);
        winLose()
    }else{
        if (compArray.length+playerArray.length<9&&!gameOver) {
            compMoveX();
        }
    }
}

playerStart.addEventListener('click',()=>{
    whoStart.style.display='none';
    one.addEventListener("click",()=>{
        if ((!((playerArray.includes(1))||(compArray.includes(1))))&&(!gameOver)) {        
            one.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(1);
            winLose();
            compMoveO();
        }
    })
    
    two.addEventListener('click',()=>{
        if ((!((playerArray.includes(2))||(compArray.includes(2))))&&(!gameOver)) {        
            two.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(2);
            winLose();
            compMoveO();
        }
    })
    
    three.addEventListener('click',()=>{
        if ((!((playerArray.includes(3))||(compArray.includes(3))))&&(!gameOver)) {        
            three.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(3);
            winLose();
            compMoveO();
        }
    })
    
    four.addEventListener('click',()=>{
        if ((!((playerArray.includes(4))||(compArray.includes(4))))&&(!gameOver)) {        
            four.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(4);
            winLose();
            compMoveO();
        }
    })
    
    five.addEventListener('click',()=>{
        if ((!((playerArray.includes(5))||(compArray.includes(5))))&&(!gameOver)) {        
            five.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(5);
            winLose();
            compMoveO();
        }
    })
    
    six.addEventListener('click',()=>{
        if ((!((playerArray.includes(6))||(compArray.includes(6))))&&(!gameOver)) {        
            six.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(6);
            winLose();
            compMoveO();
        }
    })
    
    seven.addEventListener('click',()=>{
        if ((!((playerArray.includes(7))||(compArray.includes(7))))&&(!gameOver)) {        
            seven.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(7);
            winLose();
            compMoveO();
        }
    })
    
    eight.addEventListener('click',()=>{
        if ((!((playerArray.includes(8))||(compArray.includes(8))))&&(!gameOver)) {        
            eight.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(8);
            winLose();
            compMoveO();
        }
    })
    
    nine.addEventListener('click',()=>{
        if ((!((playerArray.includes(9))||(compArray.includes(9))))&&(!gameOver)) {        
            nine.innerHTML='<i class="fa-solid fa-x">'
            playerArray.push(9);
            winLose();
            compMoveO();
        }
    })
})

compStart.addEventListener('click',()=>{
    compMoveX();
    whoStart.style.display='none';
    one.addEventListener("click",()=>{
        if ((!((playerArray.includes(1))||(compArray.includes(1))))&&(!gameOver)) {        
            one.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(1);
            winLose();
            compMoveX();
        }
    })
    
    two.addEventListener('click',()=>{
        if ((!((playerArray.includes(2))||(compArray.includes(2))))&&(!gameOver)) {        
            two.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(2);
            winLose();
            compMoveX();
        }
    })
    
    three.addEventListener('click',()=>{
        if ((!((playerArray.includes(3))||(compArray.includes(3))))&&(!gameOver)) {        
            three.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(3);
            winLose();
            compMoveX();
        }
    })
    
    four.addEventListener('click',()=>{
        if ((!((playerArray.includes(4))||(compArray.includes(4))))&&(!gameOver)) {        
            four.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(4);
            winLose();
            compMoveX();
        }
    })
    
    five.addEventListener('click',()=>{
        if ((!((playerArray.includes(5))||(compArray.includes(5))))&&(!gameOver)) {        
            five.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(5);
            winLose();
            compMoveX();
        }
    })
    
    six.addEventListener('click',()=>{
        if ((!((playerArray.includes(6))||(compArray.includes(6))))&&(!gameOver)) {        
            six.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(6);
            winLose();
            compMoveX();
        }
    })
    
    seven.addEventListener('click',()=>{
        if ((!((playerArray.includes(7))||(compArray.includes(7))))&&(!gameOver)) {        
            seven.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(7);
            winLose();
            compMoveX();
        }
    })
    
    eight.addEventListener('click',()=>{
        if ((!((playerArray.includes(8))||(compArray.includes(8))))&&(!gameOver)) {        
            eight.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(8);
            winLose();
            compMoveX();
        }
    })
    
    nine.addEventListener('click',()=>{
        if ((!((playerArray.includes(9))||(compArray.includes(9))))&&(!gameOver)) {        
            nine.innerHTML='<i class="fa-solid fa-o">'
            playerArray.push(9);
            winLose();
            compMoveX();
        }
    })
})

playAgain.addEventListener('click',()=>{
    location.reload();
})

pve.addEventListener('click',()=>{
    whoStart.style.display='flex'
    pvpBox.style.display='none'
})

let player1Array = [];
let player2Array = [];
let count = 0;

pvp.addEventListener('click',()=>{
    pvpBox.style.display='none'
    one.addEventListener('click',()=>{
        if ((!((player1Array.includes(1))||(player2Array.includes(1))))&&(!gameOver)&&(!(count%2))) {        
            one.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(1);
            winLose();
            count++;
        }else if ((!((player1Array.includes(1))||(player2Array.includes(1))))&&(!gameOver)&&(count%2)) {        
            one.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(1);
            winLose();
            count++;
        }
    })
    two.addEventListener('click',()=>{
        if ((!((player1Array.includes(2))||(player2Array.includes(2))))&&(!gameOver)&&(!(count%2))) {        
            two.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(2);
            winLose();
            count++;
        }else if ((!((player1Array.includes(2))||(player2Array.includes(2))))&&(!gameOver)&&(count%2)) {        
            two.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(2);
            winLose();
            count++;
        }
    })
    three.addEventListener('click',()=>{
        if ((!((player1Array.includes(3))||(player2Array.includes(3))))&&(!gameOver)&&(!(count%2))) {        
            three.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(3);
            winLose();
            count++;
        }else if ((!((player1Array.includes(3))||(player2Array.includes(3))))&&(!gameOver)&&(count%2)) {        
            three.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(3);
            winLose();
            count++;
        }
    })
    four.addEventListener('click',()=>{
        if ((!((player1Array.includes(4))||(player2Array.includes(4))))&&(!gameOver)&&(!(count%2))) {        
            four.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(4);
            winLose();
            count++;
        }else if ((!((player1Array.includes(4))||(player2Array.includes(4))))&&(!gameOver)&&(count%2)) {        
            four.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(4);
            winLose();
            count++;
        }
    })
    five.addEventListener('click',()=>{
        if ((!((player1Array.includes(5))||(player2Array.includes(5))))&&(!gameOver)&&(!(count%2))) {        
            five.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(5);
            winLose();
            count++;
            console.log('hi')
        }else if ((!((player1Array.includes(5))||(player2Array.includes(5))))&&(!gameOver)&&(count%2)) {        
            five.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(5);
            winLose();
            count++;
        }
    })
    six.addEventListener('click',()=>{
        if ((!((player1Array.includes(6))||(player2Array.includes(6))))&&(!gameOver)&&(!(count%2))) {        
            six.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(6);
            winLose();
            count++;
        }else if ((!((player1Array.includes(6))||(player2Array.includes(6))))&&(!gameOver)&&(count%2)) {        
            six.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(6);
            winLose();
            count++;
        }
    })
    seven.addEventListener('click',()=>{
        if ((!((player1Array.includes(7))||(player2Array.includes(7))))&&(!gameOver)&&(!(count%2))) {        
            seven.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(7);
            winLose();
            count++;
        }else if ((!((player1Array.includes(7))||(player2Array.includes(7))))&&(!gameOver)&&(count%2)) {        
            seven.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(7);
            winLose();
            count++;
        }
    })
    eight.addEventListener('click',()=>{
        if ((!((player1Array.includes(8))||(player2Array.includes(8))))&&(!gameOver)&&(!(count%2))) {        
            eight.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(8);
            winLose();
            count++;
        }else if ((!((player1Array.includes(8))||(player2Array.includes(8))))&&(!gameOver)&&(count%2)) {        
            eight.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(8);
            winLose();
            count++;
        }
    })
    nine.addEventListener('click',()=>{
        if ((!((player1Array.includes(9))||(player2Array.includes(9))))&&(!gameOver)&&(!(count%2))) {        
            nine.innerHTML='<i class="fa-solid fa-x">'
            player1Array.push(9);
            winLose();
            count++;
        }else if ((!((player1Array.includes(9))||(player2Array.includes(9))))&&(!gameOver)&&(count%2)) {        
            nine.innerHTML='<i class="fa-solid fa-o">'
            player2Array.push(9);
            winLose();
            count++;
        }
    })
})