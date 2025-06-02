describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru');  // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');  //Ввели верный пароль
        cy.get('#loginButton').click();  // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // есть крестик и он виден для пользователя
       
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#forgotEmailButton').click();  // Нажимаю восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru');  // Ввел почту для восстановления
        cy.get('#restoreEmailButton').click();  // Нажимаю отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  // Проверяю текст на совпадение
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // есть крестик и он виден для пользователя
       
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru');  // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7');  //Ввели неверный пароль
        cy.get('#loginButton').click();  // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // есть крестик и он виден для пользователя
       
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov7.ru');  // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1');  //Ввели верный пароль
        cy.get('#loginButton').click();  // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // есть крестик и он виден для пользователя
       
    })

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru');  // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1');  //Ввели верный пароль
        cy.get('#loginButton').click();  // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // есть крестик и он виден для пользователя
       
    })

    it('Проверка регистра в логине', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru');  // Ввели логин GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1');  //Ввели верный пароль
        cy.get('#loginButton').click();  // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // есть крестик и он виден для пользователя
       
    })
})




