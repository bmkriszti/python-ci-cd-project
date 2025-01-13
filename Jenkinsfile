pipeline {
    agent any
    
     environment {
        BACKEND_DIR = 'backend'
        FRONTEND_DIR = 'frontend'
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
        
        stage('Build Backend Docker Image') {
            steps {
                // Build the backend Docker image
                sh 'docker build -f ${env.BACKEND_DIR}/Dockerfile -t backend .'
            }
        }
        
        stage('Deploy') {
            steps {
                // Run the Docker container, ensuring it exposes port 5000
                sh 'docker stop my-python-app || true'
                sh 'docker rm my-python-app || true'
                sh 'docker run -d -p 5000:5000 --name my-python-app my-python-app'

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

