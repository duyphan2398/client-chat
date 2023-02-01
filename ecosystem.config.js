module.exports = {
    apps: [
        {
            name: 'client-chat',
            
        },
    ],
    deploy: {
        staging: {
            user: 'admin',
            host: ['45.251.114.197'],
            ref: 'origin/master',
            repo: 'git@github.com:duyphan2398/client-chat.git',
            ssh_options: ['ForwardAgent=yes'],
            path: '/var/www/CHAT/client-chat/',
        },
    }
}
