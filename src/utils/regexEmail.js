function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const response = regex.test(email);
    console.log(response)
    return response
}

export default validateEmail