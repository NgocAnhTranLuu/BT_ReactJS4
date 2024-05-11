import React, { Component, Fragment } from 'react'
// import style from '../index.css'

export default class MovieSoDo extends Component {

    renderGhe = () => {
        return this.props.arrMovie.map((item, index) => {
            let classGheL1 = item.loaiGhe === "Loai1" ? 'seatL1' : ''
            let classGheL2 = item.loaiGhe === "Loai2" ? 'seatL2' : ''
            let classGheL3 = item.loaiGhe === "Loai3" ? 'seatL3' : ''
            let classGheDaDat = item.daDat === true ? 'seatReser' : ''

            let hanhLangDoc = item.stt % 12 == 5 ? 'docHL' : ''
            let hanhLangNgang = item.stt == 61 ? 'ngangHL' : ''


            let classGheDangDat = ''
            let indexGheDangDat = this.props.state.danhSachGhe.findIndex(gheDD => gheDD.maGhe == item.maGhe)
            if (indexGheDangDat != -1) {
                classGheDangDat = 'seatSelect'
            }
            // console.log(this.props.state.danhSachGhe)


            return <Fragment key={index}>
                <button onClick={() => {
                  this.props.danhSachGheDangDat(item)
                }
                } disabled={item.daDat} className={`seat ${classGheL1} ${classGheL2} ${classGheL3} ${classGheDaDat} ${hanhLangDoc} ${hanhLangNgang} ${classGheDangDat}`} key={item.maGhe}>
                    {item.daDat ? 'X' : item.maGhe}
                </button>

                {(index + 1) % 12 == 0 ? <br /> : ''}
            </Fragment>

        }
        )
    }



    render() {
        return (
            <div className='soDoGhe mt-5'>
                <h4 className='mt-3'>Sơ đồ ghế trong phòng chiếu 01</h4>
                <div className='soDoGhe_chuThich row mt-4'>
                    <div className='col-2'>
                        <div className='seat seatSelect'></div>
                        <p>Ghế bạn <br />đã chọn</p>
                    </div>
                    <div className='col-2'>
                        <div className='seat seatReser'></div>
                        <p>Ghế đã được đặt trước</p>
                    </div>
                    <div className='col-2'>
                        <div className='seat seatL1'></div>
                        <p>Ghế V-VIP: <br />80.000 VNĐ</p>
                    </div>
                    <div className='col-2'>
                        <div className='seat seatL2'></div>
                        <p>Ghế VIP: <br />60.000 VNĐ</p>
                    </div>
                    <div className='col-2'>
                        <div className='seat seatL3'></div>
                        <p>Ghế thường: <br />50.000 VNĐ</p>
                    </div>
                </div>
                <div className='soDoGhe_SD mt-5'>
                    <div className='soDoGhe_SD_man'></div>
                    <p>Màn Hình</p>
                    <div className='soDoGhe_SD_ghe mt-5'>
                        {this.renderGhe()}
                    </div>
                </div>
            </div>

        )
    }
}
