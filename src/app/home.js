let i;
var document:Document; 
function magic()
{
document.getElementById(' list ').style.display = "block";
            if (i == 0)
            {
                document.getElementById("list").style.color = "red";
                i++;
            }
  else
  {  
    document.getElementById('list').style.color = 'green';
  }

            document.getElementById('adds').style.display = 'none' ;
        }

        function magic2() {
            document.getElementById("list").style.display = 'none';
            document.getElementById("adds").style.display = "block";
        }
