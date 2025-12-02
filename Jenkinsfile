pipeline{
    agent any{
        stages{
            stage('Checkout'){
                steps{
                    checkout scm
                }
            }
            stage('Install Dependencies'){
                steps{
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
            stage('Build'){
                steps{
                    echo 'Building the project...'
                    sh 'npm run build'
                }
            }
            stage('Test'){
                steps{
                    echo 'Running tests...'
                    sh 'npm test'
                }
            }

        }
    }
}