// object of mobile network prefixes array
const app = document.getElementById("app")
const networks = {
  mtn: ['803', '806', '706', '703', '810', '813', '814', '816', '903', '906'],
  airtel: ['802', '808', '812', '701', '708', '902', '907', '901'],
  glo: ['805', '807', '811', '705', '815', '905'],
  nine_mobile: ['809', '817', '818', '908', '909']
}


const submit = document.getElementById("submit")
const inputBar = document.querySelector("input")

//function to clear result when user is typing
inputBar.onkeydown = () => {
  app.innerText = "";
}


//function to check the mobile network of user
function check() {
    const number = document.getElementById("number").value;
    for (const network in networks) {
      for (const values of networks[network]) {
        if (number !== null) {
            if (number.length >= 11 && number.length < 12) {
                if (number.slice(1, 4) === values) {
                    app.innerText = `You are using ${network.toUpperCase()}`
                }
            } else {
                app.innerText = 'Incorrect digits. Check and Enter again'
            }
        } else {
            app.innerText = 'Please, enter your phone number'
        }
      }
    }
    console.log(number.length)
    console.log(number.slice(1, 4))
  };

submit.addEventListener("click", check)




