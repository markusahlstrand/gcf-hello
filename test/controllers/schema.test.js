const { expect } = require("chai");
const _ = require("lodash");

const schemaController = require("../../src/controllers/schema");

describe("schemaController", () => {
  describe("getChangeType", () => {
    it("should detect a new handler", () => {
      const schema = {
        install: {
          options: {
            handlers: [
              {
                handler: "logger",
                name: ""
              }
            ]
          }
        }
      };

      const actual = schemaController.getChange(schema);

      expect(actual.type).to.equal("NEW_HANDLER");
    });
  });

  describe("update", () => {
    it("should set the name of a new handler to the type of a handler and a shortId", () => {
      const schema = {
        install: {
          options: {
            handlers: [
              {
                handler: "logger",
                name: ""
              }
            ]
          }
        }
      };

      schemaController.update(schema);
      const name = _.get(schema, "install.options.handlers.0.name");

      expect(name.split("-")[0]).to.equal("logger");
    });

    it("should add a new section for a new handler", () => {
      const schema = {
        install: {
          options: {
            handlers: [
              {
                handler: "logger",
                name: ""
              }
            ]
          }
        }
      };

      schemaController.update(schema);
      const name = _.get(schema, "install.options.handlers.0.name");

      expect(name.split("-")[0]).to.equal("logger");
    });
  });
});
