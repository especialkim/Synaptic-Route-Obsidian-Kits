<%*
    const fileName = tp.file.title;
    let fileType = "";

    if(fileName.includes(".excalidraw")) {
        fileType = "excalidraw";
        tR += await tp.file.include("[[_ Excalidraw Router]]");
    }else if(fileName.includes(".kanban")) {
        fileType = "kanban";
        tR += await tp.file.include("[[_ Kanban Router]]");
    } else if (/^\d{4}/.test(fileName)) {
        fileType = "periodic";
        tR += await tp.file.include("[[_ Periodic Router]]");
    }else if(fileName.startsWith("_")) {
        fileType = "template";
        tR += await tp.file.include("[[_ 02 Template]]");
    } else if (fileName.startsWith("&")) {
        fileType = "system";
        tR += await tp.file.include("[[_ 0 System]]");
    } else if (fileName.startsWith("}")) {
        fileType = "inbox";
        tR += await tp.file.include("[[_ 1 Inbox]]");
    } else if (fileName.startsWith("~")) {
        fileType = "literatureCard";
        tR += await tp.file.include("[[_ 3 Literature Card]]");
    } else if (fileName.startsWith("'")) {
        fileType = "mainCard";
        tR += await tp.file.include("[[_ 4 Main Card]]");
    } else if (fileName.startsWith("(")) {
        fileType = "projectCard";
        tR += await tp.file.include("[[_ 5 Keyword]]");
    } else if (fileName.startsWith("%")) {
        fileType = "structureCard";
        tR += await tp.file.include("[[_ 6 Structure Card]]");
    } else if (fileName.startsWith("$")) {
        fileType = "project";
        tR += await tp.file.include("[[_ 7 Project]]");
    } else if (fileName.startsWith(";")) {
        fileType = "area";
        tR += await tp.file.include("[[_ 8 Area]]");
    } else if (fileName.startsWith("@")) {
        fileType = "character";
        tR += await tp.file.include("[[_ 9 Character]]");
    } else if (fileName.startsWith("!")) {
        fileType = "output";
        tR += await tp.file.include("[[_ AtoZ Output]]");
    } else if (fileName.startsWith("+")) {
        fileType = "test";
        tR += await tp.file.include("[[_ Z Test]]");
    } else if (/^(?!\d{4})[^_&}~'%$;@!+]/.test(fileName)) {
        fileType = "terms";
        tR += await tp.file.include("[[_ 2 Dictionary]]");
    } else {
        fileType = "unknown";
    }


%>