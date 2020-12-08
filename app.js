  let pronoun = ['the','our', 'we', 'those', 'that', 'these'];
  let adj = ['great', 'big', 'smelly', 'gorgeous', 'small', 'adequate' ];
  let noun = ['jogger','racoon', 'dog', 'house', 'NorthernLights', '5Geeks'];
  let ext = ['.mia','.com', '.io', '.ph', '.gov', '.org'];

  for(var i = 0; i<pronoun.length; i++){

      for(var j = 0; j<adj.length; j++){

          for(var k = 0; k<noun.length; k++){

                      for(var l = 0; l<ext.length; l++){
                          console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
                      }
          }
      }
  }