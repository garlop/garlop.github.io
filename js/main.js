function changeResume(parameter){
    if(parameter){
        var new_url = "files/cvEsp.pdf";
            $('#resumeShow').attr('data', new_url);
            $('#resumeAlt').attr('href', new_url);
            $('#resumeShow').load(new_url);
            //$('#resumeAlt').load(new_url);
    }else{
        var new_url = "files/cvEng.pdf";
            $('#resumeShow').attr('data', new_url);
            $('#resumeAlt').attr('href', new_url);
            $('#resumeShow').load(new_url);
            //$('#resumeAlt').load(new_url);
    }
}