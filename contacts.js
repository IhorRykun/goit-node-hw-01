const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  const data = JSON.parse(contacts);
  return data;
}

async function getContactById(id) {
  const contactsId = await listContacts();
  const result = contactsId.find((item) => item.id === id);
  return result;
}

// function removeContact(contactId) {
//   // ...твій код
// }

// function addContact(name, email, phone) {
//   // ...твій код
// }

module.exports = {
  listContacts,
  getContactById
};
