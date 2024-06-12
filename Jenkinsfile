pipeline {
    agent any

    stages {
        stage('创建Nodejs环境') {
            agent {
                docker { image 'm.daocloud.io/docker.io/node' }
            }
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
                sh 'ls -l'
            }
        }

        stage('创建Nginx环境') {
            agent {
                docker { image 'm.daocloud.io/docker.io/nginx' }
            }
            steps {
                sh 'whereis nginx'
            }
        }
        // 这里的hello2 是我加的，就是说明，这是stages下的第二个任务 ,就是在pipeline中加单行注释 用 // 就行
        stage('Hello2') {
            steps {
                echo 'Hello World'
            }
        }
    }
}
