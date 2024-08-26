const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

router.get('/enrolled-course', async (req, res) => {
    try {
        const user = await User.findById(req.user.id); 
        res.json({ courseId: user.courseId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch enrolled course' });
    }
});

router.post('/enroll', async (req, res) => {
    const { courseId } = req.body;

    try {
        const user = await User.findById(req.user.id);

        if (user.courseId) {
            return res.status(400).json({ error: 'You are already enrolled in a course' });
        }

        user.courseId = courseId;
        await user.save();

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to enroll in course' });
    }
});

module.exports = router;
