import Image from 'next/image'

const ImageCustom = ({src, alt, width, height, fixed = false}) => {
    if (!src) return <Image layout="fixed" src={'/'} alt={alt} width={width} height={height}/>;
    return (
        <Image layout={fixed? "fixed" : ''} src={src} alt={alt} width={width} height={height}/>
    );
}

export default ImageCustom;