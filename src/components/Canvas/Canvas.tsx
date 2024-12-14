import Konva from 'konva';
import React, { useEffect, useRef, useState } from 'react'
import { Image as KonvaImage, Layer, Stage } from 'react-konva'

const Canvas = () => {
    const [img, setImg] = useState<HTMLImageElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const imgRef = useRef<any>(null);
    const [sepia, setSepia] = useState<boolean>(false);
    const [blur, setBlur] = useState<boolean>(false);

    useEffect(() => {
        const image = new Image() as HTMLImageElement;
        image.src = '/public/VK.jpeg';
        console.log(img)
        if (image) {
            image.onload = () => {
                setImg(image)
            }
        }
    }, [])

    useEffect(() => {
        if(imgRef.current) {
            imgRef.current.cache()
            imgRef.current.filters(sepia ? [Konva.Filters.Sepia] : [])
            imgRef.current.getLayer().batchDraw();
        }
    }, [sepia])

    useEffect(() => {
        if(imgRef.current) {
            imgRef.current.cache()
            imgRef.current.filters(blur ? [Konva.Filters.Blur] : [])
            imgRef.current.getLayer().batchDraw();
        }
    }, [blur])

    useEffect(() => {
        if(imgRef.current) {
            imgRef.current.cache()
            imgRef.current.filters(sepia ? [Konva.Filters.Sepia] : [])
            imgRef.current.getLayer().batchDraw();
        }
    }, [sepia])


    return (
        <>
            <Stage width={600} height={600}>
                <Layer>
                    {img && (
                        <KonvaImage
                            ref={imgRef}
                            image={img}
                            x={10}
                            y={10}
                            width={100}
                            height={100}
                            draggable
                        />
                    )}
                </Layer>
            </Stage>
            <div>
                <button type='button' onClick={() => setSepia(!sepia)}>Сепия</button>
                <button type="button" onClick={() => setBlur(!blur)}>Блюр</button>
            </div>
        </>
    )
}

export default Canvas