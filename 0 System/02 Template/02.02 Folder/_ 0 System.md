<%*
    console.log("0 System");
    const {SRV} = customJS;
    let fileName = tp.file.title;
    let filePath = tp.file.path(true);
    let rootFolder = SRV.getRootFolderbyPath(filePath);

    console.log("rootFolder", rootFolder);

    if(rootFolder !== "0 System") {
        const targetFolder = "0 System";
        let subFolders = SRV.getSubFolderListsByFolderPath(targetFolder);
        let selection = "";

        if (subFolders.length > 0) {
            selection = targetFolder;
            while(true){
                const subFolderPaths = subFolders.map(t => `${selection}/${t}`);
                subFolders.unshift(selection);
                subFolderPaths.unshift(selection);
                selection = await tp.system.suggester(subFolders, subFolderPaths);

                if(selection === subFolders[0] || SRV.getSubFolderListsByFolderPath(selection).length === 0){
                    break;
                }

                // 선택된 폴더의 하위 폴더로 subFolders 업데이트
                subFolders = SRV.getSubFolderListsByFolderPath(selection);
            }
            await tp.file.move(`${selection}/${fileName}`);
            console.log("file moved to", `${selection}/${fileName}`);
        }
    }
    tR += await tp.file.include("[[_ Folder Router]]");
-%>