const ChickenFarm = () => {
  let instance;
  const createInstance = () => ({
    totalChickens: 100,
  });

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
};
