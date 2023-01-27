pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/bobocuillere/node-hello-world.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install chromium'
                sh 'npm install chromedriver'
                sh 'npm install  puppeteer'
                sh 'npm install mocha'
                sh 'npm install selenium-webdriver'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm start &'
                sh 'npx mocha button.js'
                


            }
        }
    }
}
