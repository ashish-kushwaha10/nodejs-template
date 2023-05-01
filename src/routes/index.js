const express = require('express');

const v1Routes = require('./v1');

const router = express.Router();

router.use('/v1', v1Routes); // whenever "/v1" routing is called then this router will be called and it will redirect to "v1Routes" route to handle the further request

module.exports = router;