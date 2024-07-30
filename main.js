
let feedbackContainer = document.querySelector('.feedback__container')
let feedbackCards = document.querySelector('.feedback__cards')


// Создание кнопки добавить отзыв
let getFormFeedback = document.createElement('button')
getFormFeedback.textContent = 'Добавить отзыв'
getFormFeedback.classList.add('btn')

// Создание кнопки сохранить отзыв
let btnSave = document.createElement('button')
btnSave.textContent = 'Сохранить'
btnSave.classList.add ('btn')


// Функция создания формы отзыва
let getForm = function () {
    let blockForm = document.createElement('div')
    blockForm.classList.add('block__form')

    let formDesc = document.createElement('textarea')
    formDesc.classList.add('form__style')

    let formUser = document.createElement('input')
    formUser.type = 'text'
    formUser.placeholder = 'Ваше имя'
    formUser.classList.add ('form__style')


    blockForm.append(formDesc, formUser, btnSave)
    feedbackContainer.append(blockForm)

}


getFormFeedback.addEventListener('click', function () {
    feedbackCards.classList.replace('feedback__cards', 'block-close')
    getFormFeedback.classList.replace('btn', 'block-close')
})

getFormFeedback.addEventListener('click', getForm)

feedbackContainer.append(getFormFeedback)