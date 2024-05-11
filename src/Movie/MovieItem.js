import React, { Component } from 'react'

export default class MovieItem extends Component {

    // renderGheDangDat = () => {
    //     return this.props.danhSachGhe.map((gheItemGH) => {
    //         let { maGhe, gia, soLuong } = gheItemGH
    //         return <tr key={maGhe}>
    //             <td>Mark</td>
    //             <td>5 ghế</td>
    //             <td>{maGhe}</td>
    //             <td>{gia.toLocaleString()} VNĐ</td>
    //         </tr>
    //     })
    // }




    render() {
        let {sumTotal, maGheTotal} = this.props
        return (
            <div className='textDatGhe mt-5'>
                <h4>Bắt đầu đặt ghế của bạn</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Số lượng ghế</th>
                            <th scope="col">Mã ghế</th>
                            <th scope="col">Giá tiền</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>5 ghế</td>
                            <td>{maGheTotal()}</td>
                            <td>{sumTotal()}</td>
                        </tr>
                    </tbody>
                </table>

                <button className="btn btn-danger">MUA VÉ</button>
            </div>
        )
    }
}
