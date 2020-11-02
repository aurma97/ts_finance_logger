// interfaces
import { Invoice } from './models/Invoice.js';
import { Payment } from './models/Payment.js';
import { ListTemplate } from './models/ListTemplate.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const invOne = new Invoice('Marcel', 'work on marcel website', 120);
const invTwo = new Invoice('Idriss', 'work on the mario webstie', 120);
const invoices = [invOne, invTwo];
invoices.forEach(inv => console.log(inv.client, inv.amount));
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
