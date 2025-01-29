# Python Flask CI/CD Project

This project demonstrates a simple Python Flask app with CI/CD integration using Jenkins and Docker.

---

## Features
- A Flask app that returns "Hello, World!"
- Unit tests with Pytest.
- Dockerized for easy deployment.
- Automated CI/CD pipeline with Jenkins.

---

## Setup

### Prerequisites:
- Python 3.9+
- Docker
- Jenkins
- Git

### Steps:
1. **Clone the repository**
```
git clone https://github.com/bmkriszti/python-ci-cd-project.git
``` 
```
cd python-ci-cd-project
```
2. **Install Dependencies**

To install the required dependencies, run:
```
pip install -r requirements.txt
```
---
## Run the App

1. **Start the app**
```
python app.py
```
2. **Open in Your Browser**
```
http://localhost:5000
```
---

## Run Tests
To run unit tests with **Pytest**:
```
pytest
```
---
## Run with Docker

1. **Build the Docker image**:

```
docker build -t my-python-app .
```
2. **Run the container**
```
docker run -d -p 5000:5000 my-python-app
```
---
## CI/CD with Jenkins

The Jenkins pipeline (`Jenkinsfile`) includes:
- Code checkout
- Dependency installation
- Unit tests
- Docker image build and deployment

- https://medium.com/@dassandeep0001/how-to-install-git-in-ec2-instance-1bfeb1cc9dc9
