let correct_pseudo = "admin";
let correct_mdp = "admin";

document.getElementById("login-form1").addEventListener('submit', function(evt){
    evt.preventDefault();
    let pseudo = document.getElementById("input-pseudo").value;
    let mdp = document.getElementById("input-mdp").value;

    if ((correct_pseudo === pseudo) && (correct_mdp === mdp)) {
        document.location.href = "control_panel.html";
}else{
    console.log("pseudo or password is incorrect");
}
})