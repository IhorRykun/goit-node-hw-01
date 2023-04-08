const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function list() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  const data = JSON.parse(contacts);
  return data;
}

async function get(id) {
  const contactsId = await list();
  const result = contactsId.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return result;
}

async function add(name, email, phone) {
  const contact = await list();
  const newContact = {
    id: v4(),
    name: name,
    email: email,
    phone: phone
  };
  contact.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contact));
  return newContact;
}

async function remove(id) {
  const allContacts = await list();
  const contacts = await get(id);
  const newContact = allContacts.filter((contacts) => contacts.id !== id);
  await fs.writeFile(contactsPath, JSON.stringify(newContact));
  console.log(newContact);
  return;
}

module.exports = {
  list,
  get,
  add,
  remove
};
