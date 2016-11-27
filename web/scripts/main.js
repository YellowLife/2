// function signInCallback(authResult) {
//     if (authResult['code']) {
//         if (auth2.isSignedIn.get()) {
//             var profile = auth2.currentUser.get().getBasicProfile();
//             var info = "id="+ profile.getId()+"&name="+profile.getName();
//             window.location.replace("/LoginServlet?"+info);
//         }
//     } else {
//         // There was an error.
//     }
// }

var btn_press = document.getElementById("btn_press");
var btn_click = document.getElementById("btn_click");

function playAudio(btn) {
    if(btn === "btn_press"){
        btn_press.play();
    }else if(btn=="btn_click"){
        btn_click.play();
    }
}

function pauseAudio() {
    x.pause();
}
