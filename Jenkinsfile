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
     
     stage("Stop Old App") { 
         steps { 
           sh 'docker ps -f name=dockerReact -q | xargs --no-run-if-empty docker container stop'
           sh 'docker container ls -a -fname=dockerReact -q | xargs -r docker container rm'
         }
     }
      stage("Deploy application") { 
         steps { 
           sh 'docker run -dt --name dockerReact -p 80:80 mohit/docker-react'
         }
     }
  
   	}

   }
