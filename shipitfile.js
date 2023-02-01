module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)

    shipit.initConfig({
        default: {
            deployTo: '/var/www/CHAT/client-chat',
            repositoryUrl: 'git@github.com:duyphan2398/client-chat.git',
            branch: 'master',
            keepReleases: 1,
        },
        staging: {
            servers: 'admin@45.251.114.197',
        },
    })
}
