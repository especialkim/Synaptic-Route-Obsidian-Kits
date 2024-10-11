<%*
const { SRV } = customJS;
const filePath = tp.file.path(true);
const folderList = SRV.getFolderListbyPath(filePath);
console.log("folderList", folderList);

for(const folder of folderList) {
    const templateFileName = `_ ${folder}`;
    const templateDefaultFileName = `_ ${folder} Default`;
    const templateDefaultFile = await tp.file.find_tfile(templateDefaultFileName);
    const templateFile = await tp.file.find_tfile(templateFileName);

    if(templateDefaultFile) {
        console.log("Template Default File Found:", templateDefaultFileName);
        tR += await tp.file.include(`[[${templateDefaultFileName}]]`);
        break;
    }

    if(templateFile) {
        console.log("Template File Found:", templateFileName);
        tR += await tp.file.include(`[[${templateFileName}]]`);
        break;  // 첫 번째 매칭되는 템플릿을 찾으면 중단
    }
}

if (!tR) {
    // 폴더 기반 템플릿이 없을 경우, A to Z Output 템플릿 확인
    if (/^[A-Z] /.test(filePath)) {
        tR += await tp.file.include("[[_ AtoZ Output]]");
    }
    
    // 여전히 매칭되는 템플릿이 없는 경우
    if (!tR) {
        console.log("No matching template found");
    }
}
%>