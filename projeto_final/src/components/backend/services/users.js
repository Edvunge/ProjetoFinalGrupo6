const { getUserByEmail } = require("../data/users");

async function checkIfEmailExists(email) {
    const user = await getUserByEmail(email)
    return user !== null
}

module.exports = { checkIfEmailExists }