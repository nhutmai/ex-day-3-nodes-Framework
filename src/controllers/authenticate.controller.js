const authService = require('../services/auth.service');

const login = async ({username, password}) => {
    return await authService.login(username, password);
};
const register = async ({username, password, email}) => {
    return await authService.register(username, email, password);
};
module.exports = {
    login,
    register,
};