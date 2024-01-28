export const keepServerAlive = async (req, res, next) => {
  fetch("https://seismic-v1.onrender.com/api").then(
    console.log("Keeping Server Alive")
  );
};
