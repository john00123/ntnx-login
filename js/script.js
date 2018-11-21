const signUp =
`<div class='container' style='display:none'>

  <h1 style='font-size:22px; margin-bottom:10px;'>Create a Nutanix account</h1>

  <label style='margin-top:30px'for="firstname">First Name</label>
  <input type="text" name="firstname" id="firstname">

  <label for="lastname">Last Name</label>
  <input type="text" name="lastname" id="lastname">

  <label for="email">Email</label>
  <input type="text" name="email" id="email">

  <label for="password">Password</label>
  <input type="password" name="password" id="password">

  <button class='back'> Create account </button>
  <div class='space-between'><div class='inline-separator'></div><p class='w-sep'> Already have an account?</p><div class='inline-separator'></div></div>
  <button class='secondary signup'> Log In </button>
</div>`


//
// $(document).ready(function() {
//   setTimeout(function(){
//   $('#names').scroll();
//   $("#names").animate({
//     scrollTop: 240
//   }, 2500, 'easeInOutSine', function(){
//     $('.names').after('<div class="circle"></div>');
//     $('.circle').slideDown(600);
//   })}, 1200);
//
//   $('.signup, .forgot, .login').click(function(){
//     $('.container').fadeOut('slow',
//     function(){
//       $('.container').remove();
//       $('body').prepend(signUp);
//       setTimeout(function () {
//         $('.container').fadeIn('slow');
//       }, 300);
//     });
//
//     console.log($(this).text());
//   })
//
// });
