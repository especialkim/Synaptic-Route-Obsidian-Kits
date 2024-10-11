<%*
const { SRV } = customJS;
const fileName = tp.file.title;
const fileFolder = tp.file.folder(true)
const filePath = tp.file.path(true);
const rootFolder = SRV.getRootFolderbyPath(filePath);

let creationMode;

if (fileName.startsWith('무제 파일') || fileName.startsWith('Untitled')) {
    if(fileFolder === rootFolder){
        creationMode = 1;
    } else {
        creationMode = 2;
    }
} else {
    creationMode = 3;
}
console.log("Creation Mode:", creationMode);
-%>
<%* if (creationMode === 1) { -%>
<%- tp.file.include("[[_ Root Folder Router]]") -%>
<%* } else if(creationMode === 2) { -%>
<%- tp.file.include("[[_ Folder Router]]") -%>
<%* } else if(creationMode === 3) { -%>
<%- tp.file.include("[[_ File Router]]") -%>
<%* } -%>