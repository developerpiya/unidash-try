async function raiseIssue(page) {
    await page.getByText('Tickets').click();
    await page.getByText('Raise Issue').click();

    //native
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_0');
    await page.getByRole('combobox', { name: '* Client Inventory :' }).click();
    await page.locator("div[title]").first().click();
    await page.click('#raise-ticket_priority');
    await page.locator('div[title="Urgent"]').click();
    await page.click('#raise-ticket_nativePartner');
    await page.locator('div[title="MG ID"]').click();
    await page.locator('#raise-ticket_Monthly').fill('30000')
    await page.locator('#raise-ticket_description').fill('This is my issue description');
    await page.getByRole('button', { name: 'Submit', exact: true }).click();

    //Troubleshooting
    await page.getByText('Raise Issue').click();
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_1');
    await page.getByRole('combobox', { name: '* Client Inventory :' }).click();
    await page.locator("div[title]").first().click();
    await page.click('#raise-ticket_priority');
    await page.click('div[title="Medium"]');
    await page.click('#raise-ticket_products');
    await page.click('div[title="Cube"]');
    await page.click('input[type="radio"][value="Tier-2"]');
    await page.locator('#raise-ticket_datesheet').fill('6/10/2025');
    await page.locator('#raise-ticket_description').fill('description 1');
    await page.click('button.ant-btn >> text=Submit and Add Another');

    //content issue
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_2');
    await page.locator('#raise-ticket_DomainURL').fill('abc.com');
    await page.click('#raise-ticket_priority');
    await page.click('div[title="Low"]');
    await page.locator('#raise-ticket_description').fill('description 1');
    await page.click('button.ant-btn >> text=Submit and Add Another');

    //content update
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_3');
    await page.fill('#raise-ticket_LP\\ URL', 'https://example.com');
    await page.locator('#raise-ticket_Keywords').fill('hair treatment, air purifier, online courses');
    await page.locator('#raise-ticket_title').fill('title 1');
    await page.locator('#raise-ticket_description').fill('description 2');
    await page.click('button.ant-btn >> text=Submit and Add Another');

    //Deceptive Ad
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_4');
    await page.locator('#raise-ticket_Doc\\ Link').fill('https://example1.com');
    await page.click('#raise-ticket_Strike');
    await page.click('div[title="True"]');
    await page.locator('#raise-ticket_Ad\\ Account').fill('Ad Account 1');
    await page.click('#raise-ticket_assignedTo');
    await page.click('li[title="GDN Team"]');
    await page.getByText('snehil').click();
    await page.click('#raise-ticket_priority');
    await page.click('div[title="High"]');
    await page.locator('#raise-ticket_description').fill('description 3');
    await page.click('button.ant-btn >> text=Submit and Add Another');

    //afs issue
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_5');
    await page.click('#raise-ticket_assignedTo');
    await page.click('li[title="Afs Tech"]');
    await page.getByText('Sahil Dabas').click();
    await page.click('#raise-ticket_priority');
    await page.click('div[title="High"]');
    await page.locator('#raise-ticket_description').fill('description 4');
    await page.click('button.ant-btn >> text=Submit and Add Another');

    //Payment & Invoice
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_6');
    await page.click('#raise-ticket_company');
    await page.locator('div[title]').first().click()
    await page.click('#raise-ticket_priority');
    await page.click('div[title="Urgent"]');
    await page.locator('#raise-ticket_description').fill('description 4');
    await page.click('button.ant-btn >> text=Submit and Add Another');

    //App Qc
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_8');
    await page.locator('#raise-ticket_App\\ Name').fill('app 1');
    await page.click('#raise-ticket_priority');
    await page.click('div[title="High"]');
    await page.locator('#raise-ticket_description').fill('description 4');
    await page.click('button.ant-btn >> text=Submit and Add Another');

    //Product testing
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_9');
    await page.click('#raise-ticket_domain');
    await page.locator('div[title]').first().click();
    await page.click('#raise-ticket_priority');
    await page.click('div[title="High"]');
    await page.locator('#raise-ticket_description').fill('description 4');
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.waitForTimeout(2000)

}
module.exports = raiseIssue;