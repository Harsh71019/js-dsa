const myModule = (() => {
  const privateVar = 'I am private';
  const privateMethod = () => 'I am a private method';

  return {
    publicVar: 'I am public',
    publicMethod: () => {
      console.log('Calling private method');
      privateMethod();
    },
  };
})();
