# The-Souled-Store-

<!-- <div class="g-signin2" data-onsuccess="onSignIn"></div>

<button type="button" class="btn btn-danger" onclick="signOut();" >Sign Out</button>
</div> -->

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("name").text(profile.getName());
    $("email").text(profile.getEmail());
    $("image").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been Successfully Signed Out")
        $(".g-signin2").css("display","block");
        $("data").css("display","none");

    });
  }