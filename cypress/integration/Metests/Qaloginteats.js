describe ('Тестирование формы ввода логина и пароля', function() {
	it ('Проверка формы ввода логина и пароля', function()
	{
		cy.visit('https://login.qa.studio/');
		cy.get('#forgotEmailButton').click();
		cy.get('#mailForgot').type ('german@dolnikov.ru');
		cy.get('#restoreEmailButton').click();
		cy.contains('Успешно отправили пароль на e-mail');
		cy.get('#exitMessageButton');
		})
	})

describe ('Тестирование формы ввода логина и пароля', function() {
	it ('Позитивный кейс авторизации', function()
	{
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type ('german@dolnikov.ru');
		cy.get('#pass').type ('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.contains('Авторизация прошла успешно');
		cy.get('#exitMessageButton');
		})
	})

describe ('Тестирование формы ввода логина и пароля', function() {
	it ('Негативный кейс авторизации', function()
	{
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type ('german@dolnikov.ru');
		cy.get('#pass').type ('iLoveqastudio2');
		cy.get('#loginButton').click();
		cy.contains('Такого логина или пароля нет');
		cy.get('#exitMessageButton');
		})
	})

describe ('Тестирование формы ввода логина и пароля', function() {
	it ('Негативный кейс авторизации 2', function()
	{
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type ('german@dolnikov.com');
		cy.get('#pass').type ('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.contains('Такого логина или пароля нет');
		cy.get('#exitMessageButton');
		})
	})
