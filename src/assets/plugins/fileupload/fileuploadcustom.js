$(document).ready(function($) {
    if($('.custom-file-container').length > 0) {
            //First upload
            var firstUpload = new FileUploadWithPreview('myFirstImage')
            //Second upload
            var secondUpload = new FileUploadWithPreview('mySecondImage')
        }
  });