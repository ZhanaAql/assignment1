const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output ="";

const calculate = (btnValue)=>{
    if(btnValue === "="&& output !== ""){
        //jika output mengandung '%', diganti dengan /100 sebelum dihitung
        output = eval(output.replace("%", "/100"));
    } else if(btnValue === "AC"){
        //jika tombol 'AC' ditekan, maka output menjadi string kosong
        output = "";
    } else if(btnValue === "DEL"){
        // jika tombol DEL ditekan, maka hapus karakter terakhir dari output menggunakan slice(0,-1)
        output= output.toString().slice(0, -1);
    } else{
        //jika output kosong dan tombol tersebut adalah spesialChars, maka tidak lakukan apa-apa
        if(output === "" && specialChars.includes(btnValue)) return;
        // tambahkan btnValue ke output
        output += btnValue;
    }
    //setel nilai display dengan nilai output yang baru
    display.value = output;
}

//menambahkan event listener pada semua tombol
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=> calculate(e.target.dataset.value));
});
