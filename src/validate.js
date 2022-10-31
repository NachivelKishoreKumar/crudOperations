const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const contactregex = /[0-9]/;
    if (!values.Name) {
      errors.Name = "Name is required!";
    }
    if (!values.Email) {
      errors.Email = "Email is required!";
    } 
    else if (!regex.test(values.Email)) {
      errors.Email = "Enter a valid Email!";
    }
    if (!values.Contact) {
      errors.Contact = "Contact is required";
    } 
    else if(!contactregex.test(values.Contact))
    {
      errors.Contact = "Enter a valid Contact Number";
    }
    if (!values.Address) {
      errors.Address = "Address is required";
    } 
    if (!values.Password) {
      errors.Password = "Password is required";
    } 
    else if (values.Password.length < 4) {
      errors.Password = "Password must have atleast 4 characters";
    } 
    return errors;
  };
  

  export default validate