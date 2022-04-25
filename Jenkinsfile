pipeline {
    agent {
      docker  {
       image 'hedlund/gradlew:8'
      }
    }
    stages {
        stage('Test') {
            steps {
                sh 'gradlew check'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}