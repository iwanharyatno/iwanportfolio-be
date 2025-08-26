const express = require('express');
const sendFeedback = require('../utils/feedback-mail');
const router = express.Router();

router.post('/', async (req, res) => {
    const { from, subject, message } = req.body;

    try {
        await sendFeedback({ from, subject, message });

        res.send({
            success: true,
            message: 'Feedback sucessfully delivered!'
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
});

module.exports = router;