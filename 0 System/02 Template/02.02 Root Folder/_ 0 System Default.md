<%*
    const prefix = "& ";
    const fileName = tp.file.title;
    if (!fileName.startsWith(prefix)) {
        const newFileName = `${prefix}${fileName}`;
        await tp.file.rename(newFileName);
    }
-%>
---
cssClasses: system
tag: ⚙️
---

<% tp.file.cursor(0) %>