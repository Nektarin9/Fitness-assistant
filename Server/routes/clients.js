const express = require("express");
const {
  getClients,
  getClient,
  postClient,
  deleteClient,
  updateClient,
  updateTableClient,
} = require("../controller/clients");
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
  const newClient = await postClient(req.body);
  res.send(mapClients(newClient));
});

router.delete("/:id", async (req, res) => {
  await deleteClient(req.params.id);
  res.send(req.params.id);
});

router.patch("/:id", async (req, res) => {
  const client = await updateClient(req.body, req.params.id);
  res.send(mapClients(client));
});

router.patch("/save-table/:id", async (req, res) => {
  await updateTableClient(req.body, req.params.id);
  res.send(req.body);
});

module.exports = router;
