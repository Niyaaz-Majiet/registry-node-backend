const axios = require("axios");

module.exports = {
  Query: {
    async getRegistryDataByUserId(_, args, context, info) {
      try {
        const getUserRegistries = async () => {
          let getRegistriesByUser = await axios.get(
            "http://localhost:1337/registries?user=" + args.userId
          );

          return await getRegistriesByUser.data;
        };

        let data = await getUserRegistries();

        return data;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getRegistryDataByRegistryId(_, args) {
      try {
        const getUserRegistry = async () => {
          let getRegistriesByUser = await axios.get(
            "http://localhost:1337/registries/" + args.registryId
          );

          return await getRegistriesByUser.data;
        };

        let data = await getUserRegistry();

        return data;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async addRegister(_, { name, surname, cellNumber, user }) {
      console.log("add hit");
      try {
        const addRegistryData = async () => {
          let addRegistry = await axios.post(
            "http://localhost:1337/registries",
            {
              name,
              surname,
              cellNumber,
              user,
            }
          );

          return addRegistry.data;
        };

        let data = await addRegistryData();

        return data;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updateRegister(_, { id, name, surname, cellNumber }) {
      console.log("update hit");
      try {
        const updateRegistryData = async () => {
          let updateRegistry = await axios.put(
            `http://localhost:1337/registries/${id}`,
            {
              id,
              name,
              surname,
              cellNumber,
            }
          );

          return await updateRegistry.data;
        };

        let data = await updateRegistryData();

        return data;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteRegister(_, { id }) {
      try {
        const deleteRegistryData = async () => {
          let deleteRegistry = await axios.delete(
            `http://localhost:1337/registries/${id}`
          );

          return await deleteRegistry.data;
        };

        let data = await deleteRegistryData();

        return data;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
