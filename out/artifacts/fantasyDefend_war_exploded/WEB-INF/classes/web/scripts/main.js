function signInCallback(authResult) {
    if (authResult['code']) {

        // Hide the sign-in button now that the user is authorized, for example:
        //$('#signinButton').attr('style', 'display: none')
        if (auth2.isSignedIn.get()) {
            var profile = auth2.currentUser.get().getBasicProfile();
            // console.log('ID: ' + profile.getId());
            // console.log('Full Name: ' + profile.getName());
            // console.log('Given Name: ' + profile.getGivenName());
            // console.log('Family Name: ' + profile.getFamilyName());
            // console.log('Image URL: ' + profile.getImageUrl());
            // console.log('Email: ' + profile.getEmail());
            var info = "id="+ profile.getId()+"&name="+profile.getName();
            window.location.replace("/LoginServlet?"+info);
        }
    } else {
        // There was an error.
    }
}

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
