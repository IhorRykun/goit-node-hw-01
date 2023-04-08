const operations = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "list":
      const contacts = await operations.list();
      console.log(contacts);
      break;
    case "get":
      const result = await operations.get(id);
      console.log(result);
      if (!result) {
        throw new errors(`Product with ${id}no found`);
      }
      break;
    case "add":
      const contact = await operations.add(data);
      console.log(contact);
      break;
    case "remove":
      const contactRemove = await operations.remove(id);
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

invokeAction(argv);
