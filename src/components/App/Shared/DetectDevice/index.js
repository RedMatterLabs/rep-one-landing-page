


export function Device(){
  return new Promise((resolve, reject) => {

    window.addEventListener('touchstart', function() {
      resolve('touch');
    });

    window.addEventListener('mousemove', function() {
      resolve('mouse');
    });

  })
};
