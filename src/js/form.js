const TOKEN = "6762413731:AAE3EItZBUGKealC0L4b6kPU5OykmOL1s7E",
      CHAT_ID = "-1002171659235",
      URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      success = document.getElementById('success'),
      phoneInput = document.getElementById('phone');

// МАСКА ТЕЛЕФОНА
[].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+375 (__) ___ - __ - __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
        }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

});

phoneInput.addEventListener('keydown', function(event) {
    if (event.key.match(/[a-zа-я]/i) && event.key !== 'Backspace') {
        event.preventDefault(); // Prevent typing any letters except Backspace
    }
});

document.getElementById('tg-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Имя:</b> ${this.name.value} \n`;
        message += `<b>Телефон:</b> ${this.phone.value} \n`;
        message += `<b>Сообщение:</b> ${this.message.value} \n`;

        // Validate name and phone number
        if (this.name === '' || this.phone === '') {
            alert('Name and Phone number are required');
            return; // Stop form submission if validation fails
        }

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = '';
        this.phone.value = '';
        this.message.value = '';
        success.classList.add('show')
    })

    .catch((err) => {
        console.warn(err)
    })

    .finally(() => {
        console.log('the end')
    })
})