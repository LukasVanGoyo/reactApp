import { Buffer } from 'buffer'

const Image = ({data}) => {
    const e = new Buffer.from(data).toString('base64')

    return(
        <>
            <img src={`data:image/jpeg;base64,${e}`} height="200px" width="200px" alt="" />
        </>
        )

}

export default Image;