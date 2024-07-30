
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

// Создание блока формы отзыва
let blockForm = document.createElement('div')

// Создание формы описания отзыва
let formDesc = document.createElement('textarea')

// Создание формы имени пользователя
let formUser = document.createElement('input')

// Функция создания формы отзыва
let getForm = function () {
    
    blockForm.classList.add('block__form')

   
    formDesc.classList.add('form__style')
    formDesc.placeholder = 'текст вашего отзыва'

    
    formUser.type = 'text'
    formUser.placeholder = 'Ваше имя'
    formUser.classList.add ('form__style')


    blockForm.append(formDesc, formUser, btnSave)
    feedbackContainer.append(blockForm)

}

// Вызов формы отзыва по клику
getFormFeedback.addEventListener('click', function () {
    feedbackCards.classList.replace('feedback__cards', 'block-close')
    getFormFeedback.classList.replace('btn', 'block-close')
})

getFormFeedback.addEventListener('click', getForm)

// Создание новой карточки отзыва
let newCardFeedback = document.createElement('div')
newCardFeedback.classList.add ('feedback__card')

// Сохранение созданного отзыва
btnSave.addEventListener('click', function(){
    feedbackCards.classList.replace('block-close','feedback__cards')
    getFormFeedback.classList.replace('block-close','btn') 
    blockForm.classList.replace('block__form','block-close')

    feedbackCards.append(newCardFeedback)
})


feedbackContainer.append(getFormFeedback)