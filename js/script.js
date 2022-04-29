window.onload = () => {
    let formTel = "5511974124739";
    let inputName = document.querySelector("#input-name");
    let inputDate = document.querySelector("#input-date");
    let inputTime = document.querySelector("#input-time");
    let btnSchedule = document.querySelector("#btn-schedule");

    btnSchedule.onclick = () => {
        if (inputName.value == "" || inputDate.value == "" || inputTime.value == "") {
        
        }

        else {
            let formText = `SOLICITAÇÃO DE AGENDAMENTO\n\nNome: ${inputName.value}\nData: ${inputDate.value}\nHorário: ${inputTime.value}`;

            formText = window.encodeURIComponent(formText);

            window.open("https://wa.me/" + formTel + "?text=" + formText, "_blank");
        }
    };
};