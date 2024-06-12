function cal()
{
    let b1=document.getElementById('a1').value;
    let b2=document.getElementById('a2').value;
    let b3=document.getElementById('a3').value;


    if(+b1>+b2 && +b1>+b3)
        {
            document.getElementById('ans').value="A is bigger with value";
        }
    else if(+b2>+b3)
        {
            document.getElementById('ans').value=" B is bigger";

        }
    else{
            document.getElementById('ans').value="C is bigger";
        }

}