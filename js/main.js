function changeResume(parameter){
    if(parameter){
        $("#resumeShow").data = "files/cvEsp.pdf"
        $("#resumeAlt").href= "files/cvEsp.pdf"
    }else{
        $("#resumeShow").data = "files/cvEng.pdf"
        $("#resumeAlt").href= "files/cvEng.pdf"
    }
}