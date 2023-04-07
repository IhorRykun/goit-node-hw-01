const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  const data = JSON.parse(contacts);
  return data;
}

async function getContactById(id) {
  const contactsId = await listContacts();
  const result = contactsId.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return result;
}

async function addContact(data) {
  const contact = await listContacts();
  const newContact = { id: v4(), ...data };
  contact.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contact));
  return newContact;
}

async function removeContact(id) {
  const allContacts = await listContacts();
  const contacts = await getContactById(id);
  const newContact = allContacts.filter((contacts) => contacts.id !== id);
  await fs.writeFile(contactsPath, JSON.stringify(newContact));
  console.log(newContact);
  return;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact
};
