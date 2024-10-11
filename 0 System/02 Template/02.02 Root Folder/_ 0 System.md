<%*
    const {SRV} = customJS;
    const targetFolder = "0 System";
    let fileName = tp.file.title;
    let filePath = tp.file.path(true);
    let rootFolder = SRV.getRootFolderbyPath(filePath);

    if(rootFolder !== targetFolder) {
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
-%>