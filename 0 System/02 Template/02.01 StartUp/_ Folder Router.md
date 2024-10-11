<%*
    console.log("Folder Router");
    
    const { SRV } = customJS;
    const filePath = tp.file.path(true);
    const folderList = SRV.getFolderListbyPath(filePath);
    let template = ""
    let templateFlag = false;

    for(const folder of folderList) {
        const templateFileName = `_ ${folder}`;
        const templateFile = await tp.file.find_tfile(templateFileName);

        if(templateFile) {
            console.log("Template File Found:", templateFileName);
            template = templateFileName;
            templateFlag = true;
            break;
        }
    }

    // 폴더 기반 템플릿이 없을 경우, A to Z Output 템플릿 확인
    if (!templateFlag && /^[A-Z] /.test(filePath)) {
        template = "_ AtoZ Output";
        templateFlag = true;
    }

    if(!templateFlag){
        console.log("No matching template found");
    }else{
        console.log("Template File Found:", template);
    }
-%>
<% await tp.file.include(`[[${template}]]`) -%>