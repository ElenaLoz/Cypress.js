describe ('Тестирование staya.dog', function() {
	it ('Проверка формы ввода логина и пароля', function()
	{
		cy.visit('https://staya.dog/');
		cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
		cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type ('lenaloza@mail.ru');
		cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type ('ccfjxxF7');
		cy.get('#__layout > div > main > div > div > div > section > div > form > button').click();
		cy.contains('Мои заказы');
		cy.get('#__layout > div > main > div > div.container > div > aside > button').click();
		cy.get('#__layout > div > div > section > div > div > div > button.box__button.box__button_ok.s-button.s-button_theme-dark').click();
		})
	})

describe ('Тестирование staya.dog', function() {
	it ('Негативный кейс формы ввода логина и пароля', function()
	{
		cy.visit('https://staya.dog/');
		cy.wait(500);
		cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
		cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type ('lenaloza@mail.ru');
		cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type ('ccfjxxF0');
		cy.get('#__layout > div > main > div > div > div > section > div > form > button').click();
		cy.contains('Невозможно войти с предоставленными учетными данными.');
		})
	})