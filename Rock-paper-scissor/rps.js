   
document.addEventListener('DOMContentLoaded', function() {
    let result=``;
    let playermove =``;
    let computermove;
    let cpumoveg;
    const score = JSON.parse(localStorage.getItem(`score`)) || { Player:0, Cpu:0, Tie:0};
    function scoreupdate(){
        document.querySelector('.player')
       .innerHTML = `PLAYER:- ${score.Player}`;
       document.querySelector('.cpu')
       .innerHTML = `CPU:- ${score.Cpu}`;
       document.querySelector('.tie')
       .innerHTML = `TIE:- ${score.Tie}`;
    }
    function showresult(){
        document.querySelector('.win').innerHTML = `${result}`;
    }
    function showmove(p_move,c_move){
        document.querySelector(`.pmove`).innerHTML = `PLAYER : ${p_move}`;
        document.querySelector(`.cmove`).innerHTML = `CPU : ${c_move}`;
    }
    scoreupdate();
    function pickcomputermove(){
        let cpumove=``;
        let cpurand = Math.random();
        console.log(cpurand);

        if(cpurand<1/3){
            cpumove=`rock`;
            
        }else if(cpurand>=1/3 && cpurand< 2/3){
            cpumove=`paper`;
            
        }else{
            cpumove=`scissor`;
            
        }
        console.log(cpumove);
        return cpumove;
    }

    function computermovedisplay(){
        let cpumovedisplay;
        if(computermove===`rock`){
            cpumovedisplay='👊';
        }else if(computermove===`paper`){
            cpumovedisplay='🖐️';
        }else{
            cpumovedisplay='✌️'
        }
        return cpumovedisplay;
    }
    function updateScoreInLocalStorage() {
        localStorage.setItem('score', JSON.stringify(score));
    }



    function playgame(playermove,computermove){
        if((playermove===`rock` || playermove===`👊`) && computermove===`rock`){
            result = `Tie`;
            score.Tie++;
        }
        else if((playermove===`rock` ||playermove===`👊`) && computermove===`scissor`){
            result=`You Won`;
            score.Player++;
        }
        else if((playermove===`rock` ||playermove===`👊`) && computermove===``){
            result=`You lost`;
            score.Cpu++;
        }
        else if((playermove===`paper` ||playermove===`🖐️`)&&computermove===`paper`){
            result = `Tie`;
            score.Tie++;
        }
        else if((playermove===`paper`||playermove===`🖐️`)&&computermove===`scissor`){
            result=`You lost`;
            score.Cpu++;
        }
        else if((playermove===`paper`||playermove===`🖐️`)&& computermove===`rock`){
            result=`You Won`;
            score.Player++;
        }
        else if((playermove===`scissor`||playermove===`✌️`) &&computermove===`scissor`){
            result = `Tie`;
             score.Tie++;
        }
        else if((playermove===`scissor`||playermove===`✌️`) && computermove===`paper`){
            result=`You Won`;
            score.Player++;

        }
        else{
            result=`You lost`;
            score.Cpu++;
        }
    }




    const move1 = document.getElementById('rock');
    move1.addEventListener('click', function() {
        alert(`Confirm Your Move?`)
        playermove=`👊`;
        computermove=pickcomputermove();
        cpumoveg=computermovedisplay();

        playgame(playermove,computermove);
        // if(computermove===`rock`){
        //     result = `Tie`;
        //     score.Tie++;
        // }
        // else if(computermove===`scissor`){
        //     result=`You Won`;
        //     score.Player++;
        // }
        // else{
        //     result=`You lost`;
        //     score.Cpu++;
        // }
        console.log(`player:- ${score.Player} cpu:- ${score.Cpu} Tie:- ${score.Tie}`);
        updateScoreInLocalStorage();
       showmove(playermove,cpumoveg);
        showresult();
        scoreupdate(); 
        
        
    });
    
    
    const move2 = document.getElementById('paper');
    move2.addEventListener('click', function() {
        alert(`Confirm Your Move?`)
        playermove=`🖐️`;
         computermove=pickcomputermove();
         cpumoveg=computermovedisplay();
         playgame(playermove,computermove);
        console.log(`player:- ${score.Player} cpu:- ${score.Cpu} Tie:- ${score.Tie}`);
        updateScoreInLocalStorage();
        console.log(computermove);
        showmove(playermove,cpumoveg);
        showresult();
        scoreupdate();
        
    });


    const move3 = document.getElementById('scissor');
    move3.addEventListener('click', function() {
        alert(`Confirm Your Move?`)
        playermove=`✌️`;
         computermove=pickcomputermove();
         cpumoveg=computermovedisplay();
         playgame(playermove,computermove);
        console.log(`player:- ${score.Player} cpu:- ${score.Cpu} Tie:- ${score.Tie}`);
        updateScoreInLocalStorage();
        showmove(playermove,cpumoveg);
        showresult();
        scoreupdate();
        
    });

    const reset=document.getElementById(`reset`);
    reset.addEventListener(`click`, function(){
        score.Player = 0;
        score.Cpu = 0;
        score.Tie = 0;
        playermove=``;
        computermove=``;
        cpumoveg=``;
        result=``;
        localStorage.removeItem(`score`);
        console.log(`Game Reset!!`)
        showresult();
        showmove('','');
        scoreupdate();
        
        
    })
    let a = false;
   let intervalid 
    const auto=document.querySelector('.autoplay');
    auto.addEventListener('click',function(){
        if(!a){
     intervalid = setInterval(() => {
            const autoplayermove = pickcomputermove();
            let displayrpsp;
            if(autoplayermove=='rock'){
                displayrpsp='👊';
            }else if(autoplayermove=='paper'){
                displayrpsp='🖐️';
            }else if(autoplayermove=='scissor'){
                displayrpsp='✌️';
            }
            let displayrpsc;
            const autocpumove = pickcomputermove()
            if(autocpumove=='rock'){
                displayrpsc='👊';
            }else if(autocpumove=='paper'){
                displayrpsc='🖐️';
            }else if(autocpumove=='scissor'){
                displayrpsc='✌️';
            }
            console.log(autoplayermove,autocpumove);
            playgame(autoplayermove,autocpumove);
            updateScoreInLocalStorage();
            showmove(displayrpsp,displayrpsc);
            showresult();
            scoreupdate();
        }, 1000);
        a = true;
        console.log("a=1");
    }else{
        clearInterval(intervalid);
        a = false;
    }
    })

console.log(score);


    // localStorage.setItem('score',JSON.stringify(score));
    
});
