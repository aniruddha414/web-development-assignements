console.log('Script is running');
let onSubmit = function() {
  let email = document.getElementById('exampleInputEmail1').value;
  let password = document.getElementById('exampleInputPassword1').value;
  let name = document.getElementById('exampleInputName').value;
  let cpassword = document.getElementById('exampleInputConfirmPassword1').value;

  let errors = validate(email,password,name,cpassword);
  if (errors.length === 0) {
    console.log('valid email and password');
    console.log('Email : ', email);
    console.log('Name : ',name);
    console.log('Password : ',password);
  } else {
    for (var i = 0; i < errors.length; i++) {
      var newDiv = document.createElement('div');
      newDiv.id = 'error' + i;
      newDiv.className = 'alert alert-danger';
      newDiv.innerHTML = errors[i];
      document.getElementById('errors').appendChild(newDiv);
    }
    document.getElementById('exampleInputEmail1').value ='';
    document.getElementById('exampleInputPassword1').value='';
    document.getElementById('exampleInputName').value='';
    document.getElementById('exampleInputConfirmPassword1').value='';
  }

};

let validate = function(email,pass,name,cpass) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let errors = [];
  if(name.length === 0){
    errors.push('Name cannot be empty');
  }
  if (reg.test(email)) {
  } else if (email.length === 0) {
    errors.push('Email cannot be empty');
  }
  else {
    errors.push('Invalid Email');
  }
  if (pass.length < 8) {
    errors.push("Your password must be at least 8 characters");
  }
  if (pass.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter.");
  }
  if (pass.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
  }
  if(pass !== cpass ) {
    errors.push('Password and Confirm Password Do not match');
  }
  return errors;
}
