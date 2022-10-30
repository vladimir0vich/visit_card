  const openModalImg = (triggerSelector, modalDataSelector) => { // объявляем функцию открытия модального окна, которая принимает в качестве параметров селекторы кнопки и соответствующего модального окна   
  const trigger = document.querySelector(triggerSelector) // ищем кнопку по переданному селектору
  const modal = document.querySelector(modalDataSelector) // ищем модальное окно по переданному селектору
  if (!trigger || !modal) return // если такая кнопка или модальное окно не найдены, то прекращаем работу функции
  trigger.addEventListener('click', e => { // при клике на кнопку
    e.preventDefault() // предотвращаем браузерные действия (если кнопка сделана через тег ссылки <a href=""></a>, то отменяется переход по ссылке)
    modal.classList.add('modal_img_active') // отображаем модальное окно, добавив ему активный класс
  })
}

openModalImg('.buttons__img1', '.modal_img[data-modal="_img1"]') // Запускаем функцию и передаем селекторы для модального окна
openModalImg('.buttons__img2', '.modal_img[data-modal="_img2"]')
openModalImg('.buttons__img3', '.modal_img[data-modal="_img3"]')
openModalImg('.buttons__img4', '.modal_img[data-modal="_img4"]')
openModalImg('.buttons__img5', '.modal_img[data-modal="_img5"]')
openModalImg('.buttons__img6', '.modal_img[data-modal="_img6"]')
openModalImg('.buttons__img7', '.modal_img[data-modal="_img7"]')
openModalImg('.buttons__img8', '.modal_img[data-modal="_img8"]')

const closeModalImg = () => { // объявляем функцию закрытия модального окна
  const modals = document.querySelectorAll('.modal_img') // ищем все модальные окна
  if (!modals) return // если их нет, то прекращаем выполнение функции
  modals.forEach(el => { // если есть, то для каждого из них
    el.addEventListener('click', e => { // при клике
      if (e.target.closest('.modal_img_close')) { // если клик был клик на кнопке закрытия
        el.classList.remove('modal_img_active') // то скрываем модальное окно, удаляя активный класс
      }
    })
  })
}
closeModalImg()