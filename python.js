var pythonjs = Npm.require('python-js');
                                                                                         
var handler = function (compileStep) {                                       
  var source = compileStep.read().toString('utf8');                                      
  var outputFile = compileStep.inputPath + ".js";                                        
                                                                                         
  try {    
    var output = pythonjs.translator.to_javascript( source ); 
  } catch (e) {                                                                          
    throw new Error(                                                                     
      compileStep.inputPath + ':' +                                                      
      e.message                                                                          
    );                                                                                   
  }                                                                                      

  output = output.replace(" require(", "Npm.require(");
  output = pythonjs.runtime.javascript + output; 

  compileStep.addJavaScript({                                                            
    path: outputFile,                                                                    
    sourcePath: compileStep.inputPath,                                                   
    data: output,                                                          
    // sourceMap: ... ?                                                   
    bare: compileStep.fileOptions.bare                                                   
  });                                                                                    
};                                                                                       
                                                                                         
Plugin.registerSourceHandler("py", handler);                                         	 
Plugin.registerSourceHandler("python", handler);                              	 
                                                                                         

