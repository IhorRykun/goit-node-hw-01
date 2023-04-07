const operations = require("./contacts");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "listContacts":
      const contacts = await operations.listContacts();
      console.log(contacts);
      break;
    case "getContactById":
      const getContactById = await operations.getContactById(id);
      console.log(getContactById);
      break;
  }
};

id = "AeHIrLTr6JkxGE6SN-0Rw";
invokeAction({ action: "getContactById", id });
