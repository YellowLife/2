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
            window.location.replace("/LoginServlet?id="+profile.getId()+"&name="+profile.getName());
        }
    } else {
        // There was an error.
    }
}

