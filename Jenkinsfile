pipeline {
    agent any

    stages {
        stage('创建Nodejs环境') {
            agent {
                docker { image 'gyx94p42.mirror.aliyuncs.com/library/node:22.3-slim' }
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
                docker { image 'gyx94p42.mirror.aliyuncs.com/library/nginx' }
            }
            steps {
                sh 'whereis nginx'
            }
        }

//         stage('创建Nginx环境') {
//             steps {
//                 sh 'whereis nginx'
//             }
//         }

        // 这里的hello2 是我加的，就是说明，这是stages下的第二个任务 ,就是在pipeline中加单行注释 用 // 就行
        stage('Hello2') {
            steps {
                echo 'Hello World'
            }
        }
    }
}
