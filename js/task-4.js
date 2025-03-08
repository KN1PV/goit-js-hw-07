document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.elements.email.value.trim();
    const userPassword = form.elements.password.value.trim();

    if (!userEmail || !userPassword) {
        alert('Всі поля форми повинні бути заповнені');
        return;
    }

    const formData = {
        userEmail: userEmail,
        userPassword: userPassword
    };

    console.log(formData);
    form.reset();
})



































// document.querySelector('.login-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const form = event.target;
//     const userEmail = form.elements.email.value.trim();
//     const userPassword = form.elements.password.value.trim();

//     const formData = {
//         userEmail: userEmail,
//         userPassword: userPassword
//     };

//     console.log(formData);
//     form.reset();
// });