
class Device {
  constructor(updateHandler) {
    this.inputType = 'mouse';
    this.updateHandler = updateHandler;
    let setDeviceType = this.setDeviceType.bind(this);

    window.addEventListener('touchstart', function() {
      setDeviceType('touch');
    });
  }
    
  setDeviceType(type){
    if (this.inputType !== type) {
      this.inputType = type;
      this.updateHandler(type);
    }
  }
}

export default Device;
