import postImg from "../../../request/postImg";

const handleFiles = (event, product, setProduct) => {
    var target = event.target;

    if (!FileReader) {
        console.log('FileReader не поддерживается — облом');
        return;
    }
    if (!target.files.length) {
        console.log('Ничего не загружено');
        return;
    } else if (target.files.length-1 > 0) {
        console.log('Можно загрузить не больше одной картинки');
        return;
    }

    var fileReader = new FileReader();
    fileReader.onload = () => postImg(fileReader.result, event.target.files[0].name, product, setProduct);

    fileReader.readAsDataURL(target.files[0]);
}

export default handleFiles;