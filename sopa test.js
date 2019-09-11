$(document).ready(function(){
// separa els valors
var data=$("#source").html().split("\n\n");

var grid = data[0].split("\n");
console.log(grid.length);

var rightletters= [];

//crea a la taula a partir valors ocults
 $("#lazona").html(function(){
    $(this).append("<table>")
    for (var row=0; row<grid.length; row++){
        $(this).append("<tr>");
        for (var col=0; col < grid[row].length; col++){
           $(this).append("<td align='center'>" + grid[row][col] + "</td>");
        }
          $(this).append("</tr>");
      }
      $(this).append("</table>");  
 });


 //box per buscar paraules
$(".seeker").click(function(){
var words= $("#box").val().toUpperCase();//search #box value
//console.log(words[0]);


function search(x, y, goal, path){
  
  //console.log(grid[x][y]);
  //console.log(goal[0]);
    if (grid[x][y]==goal[0]){
    goal = goal.substr(1);

      if (goal.length>0){
        if(x+1<grid.length){
          search(x+1, y, goal, path.concat(grid[x][y]));
        }; 
      
      }
      else {
      path = path.concat(grid[x][y]); //necessitem un ultim concat per l'última lletra
      //$("#lazona"). 
      
      rightletters = path;
     ;
     }
    
    }
    
console.log(rightletters);
var highlight= "lightblue";
$("td").attr("bgcolor", ""+highlight+"")

};



for(var row=0; row<grid.length; row++){
  for(var col=0; col<grid[row].length; col++){
    search(row, col, words, []);
  }
};

});


//fer que quadre tingui un mínim de 4 lletres!? 
//millor crear array amb paraules que es poden trobar





  
//close JS
});