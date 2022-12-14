function validation(){
    let name = document.getElementById('uname').value ;
    let pass = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let numb = document.getElementById('phno').value;
    if(name.length<6){
        alert('should not contain less than 6 characters');
    }
    if(pass.length<6){
        alert('minimun 6 characters required');
    }
    if(email==''){
        alert('invalid email id');
    }
    if(numb.length!=10){
        alert('number should contain 10 digits');
    }

}