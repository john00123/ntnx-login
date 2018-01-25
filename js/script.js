const signUp =
`<div class='container' style='display:none'>
  <h1>Not Welcome to</h1>
  <div class='names' id='names'>
    <ul id='motion'>
      <li>Nutanix</li>
      <li>Prism</li>
      <li>CE</li>
      <li>Support</li>
      <li>Partners</li>
      <li>Sizer</li>
      <li style= 'margin-bottom','0'>Xi</li>
    </ul>
  </div>


  <!-- <p>One login for all you nutanix properties</p> -->
  <!-- <div class='separator'></div> -->
  <label style='margin-top:30px'for="username">Username</label>
  <input type="text" name="username" id="username">

  <label for="password">Password<span class='forgot'>Forgot Password?</span></label>
  <input type="password" name="password" id="password">

  <button class='login'> Log In </button>
  <div class='space-between'><div class='inline-separator'></div><p class='w-sep'> New to nutanix ?</p><div class='inline-separator'></div></div>
  <button class='secondary signup'> Sign Up </button>
</div>`



$(document).ready(function() {
  setTimeout(function(){
  $('#names').scroll();
  $("#names").animate({
    scrollTop: 240
  }, 2500, 'easeInOutSine');}, 1200)

  $('.signup, .forgot, .login').click(function(){
    $('.container').fadeOut('slow',
    function(){
      $('.container').remove();
      $('body').prepend(signUp);
      $('.container').fadeIn('slow');
    });

    console.log($(this).text());
  })

});
