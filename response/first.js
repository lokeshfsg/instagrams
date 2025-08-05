document.getElementById("loginBtn").addEventListener("click", function() {
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   check = "lokesh15102001";
   if(password===check) {
      window.location.href = 'instagram_clone.html'
   }
})
