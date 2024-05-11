import React, { useState } from 'react'
import { connect } from 'react-redux'


function MovieName(props) {

    const [name, setName] = useState('')
    const [soGhe, setSoGhe] = useState('')

    // const handleSubmitBtn = (event) => {
    //     console.log(name, soGhe)
    // }


    return (
        <div className='mt-5'>
            <h4>Điền thông tin chi tiết</h4>
            <p>Bao gồm tên và số ghế bạn muốn đặt</p>

            <form className='row'>
                <div className="form-group col-6">
                    <label htmlFor="hoTen">Họ và tên</label>
                    <input
                        value={name} onChange={(event) => setName(event.target.value)}
                        type="text" className="form-control" id="hoTen" />
                    <span></span>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="soLuongGhe">Số lượng ghế</label>
                    <input
                        value={soGhe} onChange={(event) => setSoGhe(event.target.value)}
                        type="number" className="form-control" id="soLuongGhe" />
                    <span></span>
                </div>

                <button type='button' className="btn btn-danger" onClick={() => {
                    const action = {
                        type: "THONG_TIN_KH",
                        nameKH: name,
                        soGheKH: soGhe,
                    }
                    props.dispatch(action)
                }
                }>BẮT ĐẦU LỰA CHỌN</button>
            </form>

        </div>
    )

}

export default connect()(MovieName)