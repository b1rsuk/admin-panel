import postImg from "../../../request/postImg";

const handleFiles = (event, array, dispatch, alert, setArray, id, setProduct) => {
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
    fileReader.onload = () => postImg(fileReader.result, event.target.files[0].name, array, dispatch, setArray, id, setProduct);

    fileReader.readAsDataURL(target.files[0]);
}

export default handleFiles;