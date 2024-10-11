<%*
// 필요한 함수와 변수 초기화
const { SRV } = customJS;
const filePath = tp.file.path(true);
const folderList = SRV.getFolderListbyPath(filePath);

for(const folder of folderList) {
    const templateFileName = `_ ${folder}`;
    const templateFile = await tp.file.find_tfile(templateFileName);
    
    if(templateFile) {
        tR += await tp.file.include(`[[${templateFileName}]]`);
        break;  // 첫 번째 매칭되는 템플릿을 찾으면 중단
    }
}

// 매칭되는 템플릿이 없을 경우의 처리
if (!tR) {
    console.log("No matching template found");
    // 여기에 기본 템플릿이나 오류 메시지를 추가할 수 있습니다.
}
%>