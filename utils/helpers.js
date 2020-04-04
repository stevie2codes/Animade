const sessionizeUser = user => {
    return { userId: user.id, username: user.username };
}

module.exports = {sessionizeUser}