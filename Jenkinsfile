pipeline {
    agent {
      docker  {
       image 'gradle:jdk8'
      }
    }
    stages {
        stage('Test') {
            steps {
                sh './gradlew check'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}