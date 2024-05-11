import React, { Component } from 'react'
import { connect } from 'react-redux'


class MovieItem extends Component {

    render() {
        let { sumTotal, maGheTotal, soLuongGheTotal, tenGheKHDangKy } = this.props
        let { nameKHMain, soGheKHMain } = tenGheKHDangKy()
        return (
            <div className='textDatGhe mt-5'>
                <h4>Bắt đầu đặt ghế của bạn</h4>
                <table className="table">
                    {/* <thead>
                        <tr>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Số lượng ghế</th>
                            <th scope="col">Mã ghế</th>
                            <th scope="col">Giá tiền</th>

                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <th scope="row">Họ và tên</th>
                            <td>{nameKHMain}</td>
                        </tr>
                        <tr>
                            <th scope="row">SL ghế đã chọn</th>
                            <td>{soGheKHMain}</td>
                        </tr>
                        <tr>
                            <th scope="row">SL ghế</th>
                            <td>{soLuongGheTotal()}</td>
                        </tr>
                        <tr>
                            <th scope="row">Mã ghế</th>
                            <td>{maGheTotal()}</td>
                        </tr>
                        <tr>
                            <th scope="row">Thành tiền</th>
                            <td>{sumTotal()}</td>
                        </tr>
                    </tbody>
                </table>

                <button className="btn btn-danger">MUA VÉ</button>
            </div>
        )
    }
}


// const mapStateToProp = (rootReducer) => {
//     return {
//         ttKH2: rootReducer.thongTinKhachHang
//     }
// }

// export default connect(mapStateToProp)(MovieItem)
export default MovieItem