const express = require("express");
const { getClients, getClient, postClient, deleteClient, updateClient } = require("../controller/clients");
const mapClients = require("../helpers/mapClients");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const clients = await getClients();
  res.send(clients.map((client) => mapClients(client)));
});

router.get("/:id", async (req, res) => {
  const client = await getClient(req.params.id);
  res.send(mapClients(client));
});

router.post("/", async (req, res) => {
   await postClient(req.body)
});

router.delete("/:id", async (req, res) => {
  await deleteClient(req.params.id)
  res.send(req.params.id);
});


router.patch("/:id", async (req, res) => {
  await updateClient(req.body, req.params.id)
 
});


module.exports = router;
