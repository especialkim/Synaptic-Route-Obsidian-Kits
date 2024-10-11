<%*
    const prefix = "_ ";
    if (!filename.startsWith(prefix)) {
        const newFileName = `${prefix}${filename}`;
        await tp.file.rename(newFileName);
    }
-%>