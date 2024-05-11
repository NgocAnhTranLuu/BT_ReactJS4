import { combineReducers, createStore } from "redux";

const khachHang = []

const rootReducer = combineReducers({
    thongTinKhachHang: (state = khachHang, action) => {
        switch (action.type) {
            case "THONG_TIN_KH":
                console.log(action.nameKH, action.soGheKH)
                let khachHangUpDate = { nameKH: action.nameKH , soGheKH: action.soGheKH}
                return khachHangUpDate;
            default:
                return state;
        }
    }

})


export const store = createStore(rootReducer)
