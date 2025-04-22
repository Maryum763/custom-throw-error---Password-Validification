// throw Error 

//validation function for password 
function checkPassword() {
         try {
        //user nay jo password enterm kia hai
        var userPassword = document.getElementById("userPassword").value
        // check for minimum length of 8 characters
        if (userPassword.length < 8) {
            throw "please enter  at least 8 characters ."
        }
        // alert(userPassword);

        //check for max length of 12 characters
        if (userPassword.length > 12) {
            throw "please enter maximum 12 characters"
        }

        //check for spaces in the password  ( no space allowed )
        if (userPassword.indexOf(" ") !== -1) {
            throw "space is not allowed "
        }

        //CHECK ATLEAST 1 NUMBER
        var numberSomeWhere = false
        for (var i = 0; i < userPassword.length; i++) {
            //agar char not hai 
            if (!isNaN(userPassword[i])) {
                // console.log(userPassword[i])
                numberSomeWhere = true
                break;
            }
        }
        if (!numberSomeWhere) {
            throw "please include at least 1 number in the password"
        }
        alert("succesfully submit your password")
        } catch (error) {
        alert(error)
        //    console.log(userPassword)
        return false // form submit hone say rokne ke liye 
        }
}