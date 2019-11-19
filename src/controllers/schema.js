const _ = require("lodash");
const shortid = require("shortid");

function getChange(schema) {
  const handlers = _.get(schema, "install.options.handlers", []);
  // New handlers have empty names
  const newHandler = _.find(handlers, { name: "" });
  if (newHandler) {
    return {
      type: "NEW_HANDLER",
      node: newHandler
    };
  }
}

function update(schema) {
  const change = getChange(schema);

  if (change.type === "NEW_HANDLER") {
    change.node.name = `${change.node.handler}-${shortid()}`;
  }
}

module.exports = {
  getChange,
  update
};
