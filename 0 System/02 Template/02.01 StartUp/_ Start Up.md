<%*
// 필요한 함수와 변수 초기화
const { SRV } = customJS;
const fileName = tp.file.title;
const filePath = tp.file.path(true);
let rootFolder = "";
let creationMode = 1;

// 파일 생성 모드 결정
if (fileName.startsWith('무제 파일') || fileName.startsWith('Untitled')) {
    rootFolder = SRV.getRootFolderbyPath(filePath);
    creationMode = 1;
} else {
    creationMode = 2;
}

// 디버깅을 위한 로그 (필요시 주석 해제)
// console.log("Root Folder:", rootFolder);
console.log("Creation Mode:", creationMode);

// 파일 처리
if (creationMode === 1) {
    tR += await tp.file.include("[[_ Folder Router]]");
} else if(creationMode === 2) {
    tR += await tp.file.include("[[_ File Router]]");
}
%>