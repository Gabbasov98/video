$("#mainForm .submit-btn").click(function (e) {
    e.preventDefault()
    if(mainFormValidate()) {
        $(`#thankModal`).addClass("modal--active")
    }
})

function mainFormValidate(){
    let phoneIsValid = false
    let nameIsValid = false


    let phoneInput = $("#mainForm input[name='phone']")
    phoneIsValid = phoneFieldValidate($(phoneInput))

    let nameInput = $("#mainForm input[name='name']")
    nameIsValid = fieldIsEmpty($(nameInput))


    if(phoneIsValid && nameIsValid) {
        return true
    } else{
        return false
    }
}

$("#getForm .submit-btn").click(function (e) {
    e.preventDefault()
    if(getFormValidate()) {
        $(`#thankModal`).addClass("modal--active")
    }
})

function getFormValidate(){
    let phoneIsValid = false
    let nameIsValid = false


    let phoneInput = $("#getForm input[name='phone']")
    phoneIsValid = phoneFieldValidate($(phoneInput))

    let nameInput = $("#getForm input[name='name']")
    nameIsValid = fieldIsEmpty($(nameInput))


    if(phoneIsValid && nameIsValid) {
        return true
    } else{
        return false
    }
}

$("#footerForm .submit-btn").click(function (e) {
    e.preventDefault()
    if(footerFormValidate()) {
        $(`.footer-form`).addClass("footer-form--done")
    }
})

function footerFormValidate(){
    let phoneIsValid = false
    let nameIsValid = false


    let phoneInput = $("#footerForm input[name='phone']")
    phoneIsValid = phoneFieldValidate($(phoneInput))

    let nameInput = $("#footerForm input[name='name']")
    nameIsValid = fieldIsEmpty($(nameInput))


    if(phoneIsValid && nameIsValid) {
        return true
    } else{
        return false
    }
}

$(".footer-form__close").click(function () {
    $(`.footer-form`).removeClass("footer-form--done")
})



function fieldIsEmpty(field) {
    let fieldVal = $(field).val()

    if (fieldVal) {
        $(field).removeClass("error")
        return true
    } else {
        $(field).addClass("error")
        return false
    }
}


function phoneFieldValidate(field) {
    let fieldVal = $(field).val()
    fieldVal = fieldVal.replaceAll('_', '').length;

    if (fieldVal === 18) {
        $(field).removeClass("error")
        return true
    } else {
        $(field).addClass("error")
        return false
    }
}


