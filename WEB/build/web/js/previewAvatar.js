function previewFile() {
  var preview = document.querySelector('.avatar-preview');
  var file    = document.querySelector('input.hinhnen[type="file"]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}