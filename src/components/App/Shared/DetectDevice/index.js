


export function Device(){
  return new Promise((resolve, reject) => {

    var touchCallback = function() {
      resolve('touch');
      window.removeEventListener('touchstart', touchCallback);
      window.removeEventListener('mousemove', mouseCallback);
    }

    var mouseCallback = function() {
      resolve('mouse');
      window.removeEventListener('touchstart', touchCallback);
      window.removeEventListener('mousemove', mouseCallback);
    }

    window.addEventListener('touchstart', touchCallback);

    window.addEventListener('mousemove', mouseCallback);

  })
};
