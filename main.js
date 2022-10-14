// we use jquery and js to get that data stored in html and use it in our code 

const player = 'X';
const pcPlayer = 'Y';

$(document).ready(function(){
const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
// check if game is over 
function gameOver (){
    console.table(grid)
// check the horizontal first 
    for (let i = 0 ; i<3; i++ ){
        if (grid [i][0]!== ' '&&
            grid [i][0] === grid [i][1] &&
            grid [i][0] === grid [i][2] ) {
            return grid [i][0]
        }
    }
// check the vertical line 
    for (let j = 0 ; j<3; j++ ){
        if (grid [0][j]!== ' ' &&
            grid [0][j] === grid [1][j] &&
            grid [0][j] === grid [2][j] ) {
                console.log('vertical victory found', grid)
            return grid [j][0]
        }
    }
    // check diagonal - top left bottom right 
    if (grid [0][0]!== ' '&&
    grid [0][0] === grid [1][1] &&
    grid [0][0] === grid [2][2] ) {
    return grid [0][0]
    }

    // check diagonal - bottom left top right
    if (grid [2][0]!== ' '&&
    grid [2][0] === grid [1][1] &&
    grid [2][0] === grid [0][2] ) {
    return grid [2][0]
    }
    if (grid [0][1]!== ' '&&
    grid [0][1] === grid [1][0] &&
    grid [0][1] === grid [2][0] ) {
    return grid [0][1]
    }
// if there is empty spots then the game is not over 

    
        for (let i = 0 ; i<3; i++ ){
            for (let j = 0 ; j<3; j++ ){
            if ( grid[i][j] === ' '){
                return false  ; 
            }
        }
    }


    return null ;  

}



function moveAI (){
// start with finding the empty spots 

    
        for (let i = 0 ; i<3; i++ ){
            for (let j = 0 ; j<3; j++ ){
            if ( grid[i][j] === ' '){
                return {
                 i: i,
                    j: j  // when it finds anything empty it will return to i and j location
                }; 
            }
        }
    }
}

// that when we click col we change it to player token  
$('.col').click(function(){
    
    if ($(this).html().trim() != '' ){ // return if its not empty 
        
        return ; 
    }
    $(this).html(player) // first step and then we need to figure out which grid to put that token into 
    const i = $(this).data('i'); 
    const j = $(this).data('j');
    grid[i][j]= player; 
   //  console.log(grid);  Test correct it gives x in which array 
    let gameStatus =  gameOver(); 

   if ( gameStatus ) {

    swal({
        title: "Good job!",
        text: "X Player you DIDDDD IT ",
        icon: "success",
        button: " play Again"
        
   }).then(function(){
    $('.play').click()

  })
  const playerScore = $('#player').html();
  $('#player').html(Number(playerScore) + 1);
   return 
}
    //move to AI 
    const move =  moveAI()
    grid[move.i][move.j]= pcPlayer; 
    // jquery multiple attribute 
    $('.col[ data-i=' + move.i + '][data-j=' + move.j + ']').html(pcPlayer);

    
    gameStatus=gameOver()
   if (gameStatus){
    swal({
        title: "OoOops!",
        text: "HAHAHAH LOOSER Try Again ",
        icon: "success",
        button: " Play Again"  
   }).then(function(){
    $('.play').click()

  })
  
const pcScore = $('#pc').html();
  $('#pc').html(Number(pcScore) + 1);
   return 
}
    

});
$('#reset').click(function(){
   
    for (let i = 0 ; i<3; i++ ){
        for (let j = 0 ; j<3; j++ ){
        grid[i][j] =' ';
    
        }
    }
    $('.col').html(' ')
    $('#pc').html("0");
    $('#player').html("0");

 

})
$('.play').click(function(){
   
    for (let i = 0 ; i<3; i++ ){
        for (let j = 0 ; j<3; j++ ){
        grid[i][j] =' ';
    
        }
    }
    $('.col').html(' ')


 

})

});


