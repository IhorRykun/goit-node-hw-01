const operations = require("./contacts");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "listContacts":
      const contacts = await operations.listContacts();
      console.log(contacts);
      break;
    case "getContactById":
      const result = await operations.getContactById(id);
      console.log(result);
      if (!result) {
        throw new errors(`Product with ${id}no found`);
      }
      break;
    case "addContact":
      const contact = await operations.addContact(data);
      console.log(contact);
      break;
    case "removeContact":
      const contactRemove = await operations.removeContact(id);
      console.log(contactRemove);
      break;

    default:
      throw new errors(`Action ${action} not found`);
  }
};

// invokeAction({ action: "listContacts" });

// invokeAction({ action: "getContactById", id: "05olLMgyVQdWRwgKfg5J6" });

// const newData = {
//   name: "Ivan Semi",
//   email: "IvanSemi@gmail.com",
//   phone: "(099) 231-11234"
// };
// invokeAction({ action: "addContact", data: newData });

// invokeAction({
//   action: "removeContact",
//   id: "e400533e-b7ab-450a-81aa-01a908442081"
// });
