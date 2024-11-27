pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git branch: 'main', 
                    credentialsId: 'github-pat-jenkins', 
                    url: 'https://github.com/bmkriszti/python-ci-cd-project'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Python dependencies using pip3 (specify pip3 to match the installed version)
                sh 'pip3 install --upgrade pip' // Ensures the latest pip
                sh 'pip3 install -r requirements.txt'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run unit tests using pytest
                  sh 'pytest'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build a Docker image
                sh 'docker build -t my-python-app .'
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
        always {
            // Clean up if necessary
            echo 'Cleaning up...'
        }
        
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

