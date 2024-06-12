pipeline {
    agent any

    stages {
        stage('创建Nodejs环境') {
            agent {
                docker { image 'm.daocloud.io/docker.io/library/node:22.3-slim' }
            }
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm config set registry https://registry.npmmirror.com'
                sh 'npm install'
                sh 'ls -l'
            }
        }

        stage('创建Nginx环境') {
            agent {
                docker { image 'm.daocloud.io/docker.io/library/nginx' }
            }
            steps {
                sh 'rm -rf /user/share/nginx/html/*'
                sh 'cp docs/.vitepress/dist/* /user/share/nginx/html'
                sh 'whereis nginx'
            }
        }
    }
}
