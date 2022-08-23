function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet<=400){
    return 'This one is on me!'
  }
  else if(feet > 2000 && feet<2500){
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return 'No can do.'
    
  }
}
scuberGreetingForFeet(199)

function ternaryCheckCity(destinationCity){
  // Write your code here!
  if(destinationCity==="NYC"){
    return 'Ok, sounds good.'
  }
  else{
    return"No go."
  }
}
ternaryCheckCity("NYC")


function switchOnCharmFromTip(tip){
  if(tip=="generous"){
    return "Thank you so much."
  }
  else if(tip =="not generous"){
    return "Thank you."
  }
  else{
    return "Thank you."
  }
  // Write your code here!
}
switchOnCharmFromTip()