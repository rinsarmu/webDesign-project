function validateInput() {
    var fieldValue = document.getElementById("mail_or_phone").value;

    // taken from this SO post: http://stackoverflow.com/questions/7126345/regular-expression-to-require-10-digits-without-considering-spaces      
    var phoneValidation = /^([\s\(\)\-]*\d[\s\(\)\-]*){8}$/;
    var mailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fieldValue.match(phoneValidation)) {
        // correct phone structure
        return true;
    } else if (fieldValue.match(mailValidation)) {
        // correct mail format
        return true;
    } else {
        // incorrect structure
        return false;
    }
}