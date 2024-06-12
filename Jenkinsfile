pipeline {
    agent any

    stages {
        stage('构建') {
            withDockerContainer('m.daocloud.io/docker.io/library/node') {
                sh 'ls'
                sh 'node -v'
                sh 'npm -v'
                sh 'npm config set registry https://registry.npmmirror.com'
                sh 'npm install'
                sh 'npm run docs:build'
            }
        }

        stage('制品') {
            steps {
                dir('.vitepress/dist') {
                    sh 'ls -al'
                    sh 'tar -zcvf docs.tar.gz *'
                    archiveArtifacts artifacts: 'docs.tar.gz',
                                    allowEmptyArchive: true,
                                    fingerprint: true,
                                    onlyIfSuccessful: true
                    sh 'ls -al'
                }
            }
        }

        stage('部署') {
            steps {
                dir('.vitepress/dist') {
                    sh 'ls -al'
                    writeFile file: 'Dockerfile',
                              text: '''FROM m.daocloud.io/docker.io/library/nginx
ADD docs.tar.gz /usr/share/nginx/html/'''
                    sh 'cat Dockerfile'
                    sh 'docker build -f Dockerfile -t docs-app:latest .'
                    sh 'docker rm -f app'
                    sh 'docker run -d -p 80:80 --name app docs-app:latest'
                 }
             }
        }
    }
}
