pipeline { 
  
  triggers {
    pollSCM('') // Enabling being build on Push
  }
  
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
           sh 'docker run -dt -p 80:80 mohit/docker-react'
         }

     }
  
   	}

   }
