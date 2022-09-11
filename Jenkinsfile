pipeline { 
  
   agent any

   stages {
   
     stage('Install Dependencies') { 
        steps { 
           sh 'docker build -t mohit/docker-react .' 
        }
     }
     
     stage('Test') { 
        steps { 
           sh 'echo "deploying application..."'
        }
      }

         stage("Deploy application") { 
         steps { 
           sh 'docker run mohit/docker-react'
         }

     }
  
   	}

   }
