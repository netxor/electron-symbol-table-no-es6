const global = require('./global');

module.exports = {
  const identifiersLength = () => {
    dialog.showMessageBox({
      type: 'info',
      message: 'Считано ' + global.list.length + ' идентификаторов',
      buttons: ['OK']
    });
  }

  const inputToFind = () => {
    dialog.showMessageBox({
      type: 'error',
      message: 'Введите искомое значение',
      buttons: ['OK']
    });
  }
}
