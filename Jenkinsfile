pipeline {
    agent any

    environment {
        BACKEND_DIR = 'backend'
        FRONTEND_DIR = 'frontend'
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git branch: 'main', 
                    credentialsId: 'github-pat-jenkins', 
                    url: 'https://github.com/bmkriszti/python-ci-cd-project'
            }
        }
        
        stage('Install Backend Dependencies') {
            steps {
                // Install Python dependencies for the backend
                dir("${env.BACKEND_DIR}") {
                    sh 'pip3 install --upgrade pip' // Ensure the latest pip
                    sh 'pip3 install -r requirements.txt'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run unit tests using pytest
                sh 'pytest'
            }
        }
        stage('Build and Deploy with Docker Compose') {
            steps {
                script {
                    // Build and deploy both frontend and backend using Docker Compose
                    sh "docker-compose -f ${env.COMPOSE_FILE} up --build -d"
                }
            }
        }


    }

    post {
        success {
            // Notify or log success
            echo 'Build successful!'
        }
        
        failure {
            // Notify or log failure
            echo 'Build failed!'
        }
    }
}
