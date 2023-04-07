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

async function removeContact(data) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === data.id);

  const deleteProduct = allContacts[index];
  if (index !== -1) {
    allContacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  }
  return deleteProduct ? deleteProduct : null;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact
};
