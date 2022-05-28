import postScheme from "../../../request/postScheme";

const handleFiles = (event, product, alert, setProduct) => {
    var target = event.target;

    if (!FileReader) {
        alert.error('FileReader не поддерживается — облом');
        return;
    }
    if (!target.files.length) {
        alert.error('Ничего не загружено');
        return;
    } else if (target.files.length-1 > 0) {
        alert.error('Можно загрузить не больше одной картинки');
        return;
    }

    var fileReader = new FileReader();
    fileReader.onload = () => postScheme(fileReader.result, event.target.files[0].name, product, setProduct);

    fileReader.readAsDataURL(target.files[0]);
}

export default handleFiles;