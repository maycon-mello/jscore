"use strict";
module.exports = function (grunt) {
    
    var fs = require( "fs" ),
            dirName = __dirname + "/../../../",
            srcFolder = dirName + "/src/",
            jsCode = "var ";
    
    function isFolder (file){
        return file.indexOf(".") === -1;
    }
    
    function addObj (line) {
        jsCode += line.replace(".js","") + " = {};\n";
    }
    
    function listFolder(src, parent){
        fs.readdirSync(src).forEach(function(file){
            var objName = file;
            if(parent){
                objName = parent + "." + objName;
            }
            if(isFolder(file)){
                addObj(objName);
                listFolder(src + "/" + file, objName);
            }
        });
    }
    
    function listFiles (src, parent, files, dependencies) {
        fs.readdirSync(src).forEach(function(file){
            if(isFolder(file)){
                listFiles(src + "/" + file, parent + "/" + file, files, dependencies);
            }else{
                if(file.indexOf(".js") >= 0){
                    files.push(parent + "/" + file);
                    dependencies[parent + "/" + file] = getFileDependency(src + "/" + file) || [];
                }
            }
        });
    }
    
    function getFileDependency (src) {
        var buf = fs.readFileSync(src, "utf8");
        var depExp = /@(require|extends) [\w._-]*/;
        var req = "";
        //Dependency
        var dependency = [];
        while((req = depExp.exec(buf))){
            buf = buf.replace(req[0], "");
            dependency.push("/"+req[0].replace(/@(require|extends) / , "").replace(/\./gi,"/")+".js");
        }
        /*
        var importExp = /@import [\w._-];
        while((req = importExp.exec(buf))){
            var path = req[0];
            var functionClass = path.substring(path.lastIndexOf("."), path.length);
            buf = buf.replace(req[0], "");
            //buf = buf.replace(, "");
            grunt.log.writeln(functionClass);
        }*/
        //fs.writeFileSync(src, buf);
        return dependency;
    }
    
    function concatFiles (fileList, dest) {
        var resultBuf = jsCode + "\n";
        fileList.forEach(function(file) {
            var buf = fs.readFileSync(file, "utf8");
            resultBuf += buf +"\n";

        });
        //resultBuf += "\n module.exports = jscore;"
        fs.writeFileSync(dest, resultBuf); 
        //grunt.log.writeln(resultBuf);

    }

    grunt.registerTask('annotations', 'build api', function() {
        var files = [];
        var readyFiles = {};
        var concat = [];
        var dependencies = {};
        //get files and dependencies
        listFiles(srcFolder, "", files, dependencies);
        //
        function verifyFile(f) {
            if(readyFiles[f]){
                 return true;   
            }
            var dep = 0;
            grunt.log.writeln(dependencies[f]);
            try {
                dependencies[f].forEach(function(d){
                    if(!verifyFile(d)){
                        dep++;
                    }
                });
            } catch (err) {
                grunt.log.writeln(f);
            }
            if(dep === 0){
                readyFiles[f] = true;
                concat.push(srcFolder + f);
            }
        }
        
        files.forEach(function(){
            files.forEach(function(f){
                verifyFile(f);
            });
        });
        
        listFolder(dirName + '/src/', "");
        //concat = headers.concat(concat);
        concatFiles(concat, dirName + '/dist.js');
    });

};
