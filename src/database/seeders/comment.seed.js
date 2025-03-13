const Comment = require('../../models/comment.model');

const seedComments = async (events, users) => {
    await Comment.deleteMany({});
    const comments = [
        {content: 'This event is awesome!', event: events[0]._id, user: users[0]._id},
        {content: 'Looking forward to it!', event: events[1]._id, user: users[1]._id}
    ];
    const insertedComments = await Comment.insertMany(comments);
    events[0].comments.push(insertedComments[0]._id);
    await events[0].save();

    events[1].comments.push(insertedComments[1]._id);
    await events[1].save();
    return comments;

};

module.exports = seedComments;
