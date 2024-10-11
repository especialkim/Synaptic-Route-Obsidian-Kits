<%*
    const fileName = tp.file.title;
    if(fileName.includes(".excalidraw")) { -%>
<%- tp.file.include("[[_ Excalidraw Router]]") -%>
<%* } else if(fileName.includes(".kanban")) { -%>
<%- tp.file.include("[[_ Kanban Router]]") -%>
<%* } else if (/^\d{4}/.test(fileName)) { -%>
<%- tp.file.include("[[_ Periodic Router]]") -%>
<%* } else if(fileName.startsWith("_")) { -%>
<%- tp.file.include("[[_ 02 Template]]") -%>
<%* } else if (fileName.startsWith("&")) { -%>
<%- tp.file.include("[[_ 0 System]]") -%>
<%* } else if (fileName.startsWith("}")) { -%>
<%- tp.file.include("[[_ 1 Inbox]]") -%>
<%* } else if (fileName.startsWith("~")) { -%>
<%- tp.file.include("[[_ 3 Literature Card]]") -%>
<%* } else if (fileName.startsWith("'")) { -%>
<%- tp.file.include("[[_ 4 Main Card]]") -%>
<%* } else if (fileName.startsWith("(")) { -%>
<%- tp.file.include("[[_ 5 Keyword]]") -%>
<%* } else if (fileName.startsWith("%")) { -%>
<%- tp.file.include("[[_ 6 Structure Card]]") -%>
<%* } else if (fileName.startsWith("$")) { -%>
<%- tp.file.include("[[_ 7 Project]]") -%>
<%* } else if (fileName.startsWith(";")) { -%>
<%- tp.file.include("[[_ 8 Area]]") -%>
<%* } else if (fileName.startsWith("@")) { -%>
<%- tp.file.include("[[_ 9 Character]]") -%>
<%* } else if (fileName.startsWith("!")) { -%>
<%- tp.file.include("[[_ AtoZ Output]]") -%>
<%* } else if (fileName.startsWith("+")) { -%>
<%- tp.file.include("[[_ Z Test]]") -%>
<%* } else if (/^(?!\d{4})[^_&}~'%$;@!+]/.test(fileName)) { -%>
<%- tp.file.include("[[_ 2 Dictionary]]") -%>
<%* } -%>