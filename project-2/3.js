function cal()
{
    let a1=document.getElementById('min').value;
    let a2=document.getElementById('max').value;
    let a3=document.getElementById('mv').value;


    if(+a3>+a1  && +a3<+a2)
        {
            document.getElementById('ans').value="this is in range";
            
        }
        else{
            document.getElementById('ans').value="this is out of range";

        }



}