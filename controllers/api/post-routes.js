const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

//new post

router.post('/', withAuth, async (req, res) => {
    try {
        const body = req.body;
        const newPost = await Post.create({ body, userid: req.session.userid });
        res.status(200).json(newPost)
    } catch (err) {
        res.status(500).json(err);
    }
});

//update
router.put('/:id', withAuth, async (req, res) => {
    try {
        const check = await Post.update(req.body, {
            where: { id: req.params.id },
        });

        if (check > 0) {
            res.status(200).end();
        }
        else {
            res.status(400).end();
        }

    } catch (err) {
        res.status(500).json(err);
    }
})
//delete
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const check = await Post.destroy({
            where: { id: req.params.id },
        });

        if (check > 0) {
            res.status(200).end();
        }
        else {
            res.status(400).end();
        }

    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
