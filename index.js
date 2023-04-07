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
  }
};

// id = "AeHIrLTr6JkxGE6SN-0Rw";
// invokeAction({ action: "getContactById", id });

const newData = {
  name: "Ivan Semi",
  email: "IvanSemi@gmail.com",
  phone: "(099) 231-11234"
};
invokeAction({ action: "addContact", data: newData });
