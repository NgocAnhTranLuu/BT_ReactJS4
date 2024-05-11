import React, { Component, useState } from 'react'
import MovieName from './MovieName'
// import MovieSeat from './MovieSeat'
import MovieItem from './MovieItem'
import MovieSoDo from './MovieSoDo'



export default class MovieMain extends Component {
    arrMovie = [
        { "stt": 1, "maGhe": "A1", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 2, "maGhe": "A2", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 3, "maGhe": "A3", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 4, "maGhe": "A4", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 5, "maGhe": "A5", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 6, "maGhe": "A6", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 7, "maGhe": "A7", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 8, "maGhe": "A8", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 9, "maGhe": "A9", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 10, "maGhe": "A10", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 11, "maGhe": "A11", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 12, "maGhe": "A12", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },

        { "stt": 13, "maGhe": "B1", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 14, "maGhe": "B2", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 15, "maGhe": "B3", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 16, "maGhe": "B4", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 17, "maGhe": "B5", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 18, "maGhe": "B6", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 19, "maGhe": "B7", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 20, "maGhe": "B8", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 21, "maGhe": "B9", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 22, "maGhe": "B10", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 23, "maGhe": "B11", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 24, "maGhe": "B12", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },

        { "stt": 25, "maGhe": "C1", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 26, "maGhe": "C2", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 27, "maGhe": "C3", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 28, "maGhe": "C4", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
        { "stt": 29, "maGhe": "C5", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
        { "stt": 30, "maGhe": "C6", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 31, "maGhe": "C7", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 32, "maGhe": "C8", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 33, "maGhe": "C9", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 34, "maGhe": "C10", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 35, "maGhe": "C11", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 36, "maGhe": "C12", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

        { "stt": 37, "maGhe": "D1", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 38, "maGhe": "D2", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 39, "maGhe": "D3", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 40, "maGhe": "D4", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 41, "maGhe": "D5", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 42, "maGhe": "D6", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 43, "maGhe": "D7", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 44, "maGhe": "D8", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 45, "maGhe": "D9", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 46, "maGhe": "D10", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 47, "maGhe": "D11", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
        { "stt": 48, "maGhe": "D12", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

        { "stt": 49, "maGhe": "E1", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 50, "maGhe": "E2", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 51, "maGhe": "E3", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 52, "maGhe": "E4", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 53, "maGhe": "E5", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 54, "maGhe": "E6", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 55, "maGhe": "E7", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 56, "maGhe": "E8", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 57, "maGhe": "E9", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 58, "maGhe": "E10", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 59, "maGhe": "E11", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 60, "maGhe": "E12", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

        { "stt": 61, "maGhe": "F1", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 62, "maGhe": "F2", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 63, "maGhe": "F3", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 64, "maGhe": "F4", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 65, "maGhe": "F5", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 66, "maGhe": "F6", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 67, "maGhe": "F7", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 68, "maGhe": "F8", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 69, "maGhe": "F9", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 70, "maGhe": "F10", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 71, "maGhe": "F11", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 72, "maGhe": "F12", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

        { "stt": 73, "maGhe": "G1", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 74, "maGhe": "G2", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 75, "maGhe": "G3", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 76, "maGhe": "G4", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 77, "maGhe": "G5", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 78, "maGhe": "G6", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 79, "maGhe": "G7", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 80, "maGhe": "G8", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 81, "maGhe": "G9", "gia": 80000, "loaiGhe": "Loai1", "daDat": false },
        { "stt": 82, "maGhe": "G10", "gia": 80000, "loaiGhe": "Loai1", "daDat": true },
        { "stt": 83, "maGhe": "G11", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 84, "maGhe": "G12", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

        { "stt": 85, "maGhe": "H1", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 86, "maGhe": "H2", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
        { "stt": 87, "maGhe": "H3", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 88, "maGhe": "H4", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
        { "stt": 89, "maGhe": "H5", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 90, "maGhe": "H6", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 91, "maGhe": "H7", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 92, "maGhe": "H8", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 93, "maGhe": "H9", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
        { "stt": 94, "maGhe": "H10", "gia": 60000, "loaiGhe": "Loai2", "daDat": true },
        { "stt": 95, "maGhe": "H11", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },
        { "stt": 96, "maGhe": "H12", "gia": 60000, "loaiGhe": "Loai2", "daDat": false },

        { "stt": 97, "maGhe": "I1", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 98, "maGhe": "I2", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 99, "maGhe": "I3", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 100, "maGhe": "I4", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 101, "maGhe": "I5", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 102, "maGhe": "I6", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 103, "maGhe": "I7", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 104, "maGhe": "I8", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 105, "maGhe": "I9", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 106, "maGhe": "I10", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 107, "maGhe": "I11", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 108, "maGhe": "I12", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },

        { "stt": 109, "maGhe": "J1", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 110, "maGhe": "J2", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 111, "maGhe": "J3", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 112, "maGhe": "J4", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 113, "maGhe": "J5", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 114, "maGhe": "J6", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 115, "maGhe": "J7", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 116, "maGhe": "J8", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 117, "maGhe": "J9", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 118, "maGhe": "J10", "gia": 50000, "loaiGhe": "Loai3", "daDat": true },
        { "stt": 119, "maGhe": "J11", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
        { "stt": 120, "maGhe": "J12", "gia": 50000, "loaiGhe": "Loai3", "daDat": false },
    ]


    state = {
        danhSachGhe: []
    }

    danhSachGheDangDat = (gheClick) => {
        let { maGhe, gia } = gheClick
        let gheItem = { maGhe: maGhe, gia: gia, soLuong: 1 }

        let danhSachGheUpDate = this.state.danhSachGhe

        let index = danhSachGheUpDate.findIndex(gheDD => gheDD.maGhe == gheItem.maGhe)
        // console.log(index)
        if (index != -1) {
            danhSachGheUpDate.splice(index, 1);
        } else {
            danhSachGheUpDate.push(gheItem)
        }

        let newState = {
            danhSachGhe: danhSachGheUpDate
        }
        this.setState(newState)
    }

    maGheTotal = () => {
        let tongMaGhe = this.state.danhSachGhe.reduce((maghe, item) => {
            return maghe + item.maGhe + " "
        }, [])
        //   console.log(tongMaGhe)
        return tongMaGhe
    }

    sumTotal = () => {
        let totalSum = this.state.danhSachGhe.reduce((total, item) => {
            return total + item.gia
        }, 0)
        return totalSum.toLocaleString() + " VNĐ"
    }



    render() {

        return (
            <div className='header'>
                <div className='container'>
                    <div className='nen row'>
                        <div className='col-8'>
                            <MovieSoDo state={this.state} arrMovie={this.arrMovie} danhSachGheDangDat={this.danhSachGheDangDat} />
                        </div>
                        <div className='col-4 box'>
                            <MovieName/>

                            <MovieItem maGheTotal={this.maGheTotal} sumTotal={this.sumTotal} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


