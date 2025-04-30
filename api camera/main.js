window.addEventListener('load',()=>{
    const elVideo = document.getElementById('elVideo');
    const elErros = document.getElementById('elErros');
    const btnCapturar = document.getElementById('btnCapturar');
    const btnDowload = document.getElementById('btnDowload');
    imagemURL =''; //

    navigator.mediaDevices //representa as fontes de medias do computador
    .getUserMedia({video:true, audio:false})
    .then((stream)=>{

        elVideo.srcObject = stream; //liga o elemento ao video

        elVideo.play(); //inicia o video
    }) // se tiver pão
    .catch((erro)=>{
        elErros.innerHTML =erro;
    }); //se não tiver pão

    btnCapturar.addEventListener('click',()=>{
        const contexto = canvas.getContext('2d');
        canvas.width = elVideo.videoWidth;
        canvas.height = elVideo.videoHeight;

        contexto.drawImage(elVideo,0,0,canvas.width,canvas.height);

        imagemURL = canvas.toDataUrl('image/png')

    }); 

    btnDowload.addEventListener('click',()=>{
      const imgLink = document.createElement('a');
      imgLink.href = imagemURL
      imgLink.download = 'captura.png';
      imgLink.click();
 });


});