## Folder Tree

```dataviewjs
const currentFile = dv.currentFilePath;
const vault = app.vault;

function displayFolderTree(folder, prefix = "") {
    let output = "";
    const subfolders = folder.children
        .filter(child => child.children)
        .sort((a, b) => a.name.localeCompare(b.name));

    subfolders.forEach((subfolder, index) => {
        const isLast = index === subfolders.length - 1;
        output += `${prefix}${isLast ? "└── " : "├── "}${subfolder.name}\n`;
        output += displayFolderTree(subfolder, prefix + (isLast ? "    " : "│   "));
    });

    return output;
}

const rootFolder = vault.getRoot();
const treeOutput = `${vault.getName()}\n${displayFolderTree(rootFolder)}`;
console.log(vault.getName());
console.log(treeOutput);
dv.paragraph("```\n" + treeOutput + "\n```");
```