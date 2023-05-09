var resize = $('#preview').croppie({
    enableExif: true,
    enableOrientation: true,
    viewport:{
        width:200,
        height:200,
        type:'square'
    },
    boundary:{
        width:300,
        height:300
    }
})


$("#fileInput").on("change", function(){
    var reader = new FileReader();
    reader.onload = function(e){
        resize.croppie('bind',{
            url: e.target.result
        });
    }
   reader.readAsDataURL(this.files[0]);
    
})

$('#buttonCreatePost').on('click', function(){
    resize.croppie('result',{
        type:'base64',
        size:'viewport'
    }).then(function(img){
        // const fileInput  = document.getElementById('preview')
        console.log(img)
    });
});