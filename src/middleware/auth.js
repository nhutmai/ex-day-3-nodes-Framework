const isAuthenticated = (context) => {
    if (!context.user) {
        throw new Error('Not authenticated');
    }

};
module.exports = {isAuthenticated};