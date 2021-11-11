const express = require('express');
const router = express.Router();
const { verifySession } = require("supertokens-node/recipe/session/framework/express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/register', verifySession(), async (req, res) => {
  
  const { email, name } = req.body;
  try {
    await prisma.user.create({
      data: {
        email, name
      }
    });

    console.log(await prisma.user.findMany({}));
  } catch (error) {
    console.log('Could not register', error);
    res.status(500).send(error);
  }

  res.send();
});

module.exports = router;
