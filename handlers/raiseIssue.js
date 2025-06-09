async function raiseIssue(page) {
    await page.getByText('Tickets').click();
    await page.getByText('Raise Issue').click();

    //native
    await page.click('#raise-ticket_task');
    await page.click('#raise-ticket_task_list_0');

    await page.click('#raise-ticket_domain');
    // await page.click('#raise-ticket_domain_list_0');
    await page.getByTitle('UBC-0541-99 : kunmanga.com').click();
    await page.waitForTimeout(1000);
}
module.exports = raiseIssue;