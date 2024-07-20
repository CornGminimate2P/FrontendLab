function displayMessage()
{
    alert("Hello, World!");
}

function js1() 
{
    let name = prompt("Please enter your name");
    let age = prompt("Please enter your age", "");
    if (name != null && age != null) 
    {
        if (age < 18)
            document.getElementById("js1").innerHTML = "Name : " + name + "   " + "Age under 18";
        else
            document.getElementById("js1").innerHTML = "Name : " + name + "   " + "Age above 18";
    }
}

function js2() 
{
    let round = parseInt(prompt("Enter amount of Value", "0"), 10);
    let amount = round;
    let cal = 0;
    let i = 0;
    let res = 0;

    while (i < amount)
    {
        let num = parseInt(prompt("Enter a Value", "0"), 10);
        cal += num;
        i++;
    }
    res = cal / amount;
    if (res != null) 
    {
        document.getElementById("js2").innerHTML = res;
    }
}

function js3()
{
    
}