class SRV {

  // 파일 이름으로 루트 폴더 가져오기
  getRootFolderbyFileName(fileName) {
    const files = app.vault.getFiles();
    const file = files.find(f => f.name === fileName);
  
    if (!file) {
      return null;
    }
  
    return this.getRootFolderbyPath(file.path);
  }

  // 경로로 루트 폴더 가져오기
  getRootFolderbyPath(path) {
    const pathParts = path.split('/');
  
    if (pathParts.length === 1) {
      return '';
    }
  
    return pathParts[0];
  }

  // 경로로 부터 폴더리스트 배열 가져오기 -> 직계부모부터 최상위까지 순서대로
  getFolderListbyPath(path) {
    const pathParts = path.split('/');
    return pathParts.slice(0, -1).reverse();
  }

  // 폴더 경로로 부터 자식 폴더 경로 가져오기
  getSubFolderListsByFolderPath(folderPath){
    return app.vault.getAbstractFileByPath(folderPath).children.filter(child => !child.extension).map(t => t.name)
  }

  
}