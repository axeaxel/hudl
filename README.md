# hudl
Automate any cases that you would think are good to test the functionality of validating logging into hudl.com with your credentials

//install Cypress
npm install Cypress

//added as-a for hidden password https://github.com/bahmutov/as-a
When running tests locally I strongly recommend using my as-a utility to load groups of environment variables conveniently and cross-platform. In file ~/.as-a/.as-a.ini I will add one more INI section and will place the secret password variable there.

~/.as-a/.as-a.ini
1
2
3
[kps]
; group of environment variables for keep-password-secret app
CYPRESS_password=secret


//use this command to run tests with the password not visible
 CYPRESS_password=secret npx cypress run
