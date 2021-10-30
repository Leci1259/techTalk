const { Comment } = require('../models');

const commentData = [{
        body:"Practice comment 1",
        user_id: 5,
        post_id: 1
    },
    {
        body:"Practice comment 2",
        user_id: 4,
        post_id: 2
    },
    {
        body:"Practice comment 3",
        user_id: 3,
        post_id: 3
    },
    {
        body:"Practice comment 4",
        user_id: 2,
        post_id: 4
    },
    {
        body:"Practice comment 5",
        user_id: 1,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;