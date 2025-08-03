function doGet() {
  return HtmlService.createHtmlOutputFromFile('vallegrande')
    .setTitle('Instituto de Educación Superior Valle Grande')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}