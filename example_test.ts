Feature('Codeceptjs test example');

Scenario('Load example.com website - first test',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#elementdoesnotexist')
});

Scenario('Load example.com website - second test',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#elementdoesnotexist')
});

Scenario('Load example.com website - third test',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#elementdoesnotexist')
});

