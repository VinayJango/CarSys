function FetchCar()
{
    let User_Input;
    let CarName = prompt("Enter Car Name: ");

    switch(CarName) 
    {
        case "lamborghini":
            User_Input = "Good Choice~!";
        break;
        case "swift":
            User_Input = "Nice CHoice~!";
        break;
        case "Baleno":
            User_Input = "Fair Choice~!";
        break;
        default:
            User_Input = "I have Never Heard of That One~!!";
    }
    document.getElementById("Check_Button_Id").innerHTML = User_Input;
}