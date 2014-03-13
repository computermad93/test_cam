document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady() {
x$("#selectorBtn").touchstart(function(e) {
navigator.camera.getPicture(
gotPicture,
onError,
{
sourceType:Camera.PictureSourceType.CAMERA,
destinationType:Camera.DestinationType.FILE_URI,
quality:50
}
);
});
}