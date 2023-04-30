function getEle(id) {
  return document.getElementById(id);
}

// Bài tập 1: Quản lý tuyển sinh
document.getElementById("btnKetQuaTuyenSinh").onclick = function () {
  //input: number
  var diemChuan = getEle("diemChuan").value * 1;
  var khuVuc = getEle("khuVuc").value * 1;
  var doiTuong = getEle("doiTuong").value * 1;
  var diemMonThu1 = getEle("diemMonThu1").value * 1;
  var diemMonThu2 = getEle("diemMonThu2").value * 1;
  var diemMonThu3 = getEle("diemMonThu3").value * 1;

  //output
  var ketQua = "";

  //progress
  var TongDiem = diemMonThu1 + diemMonThu2 + diemMonThu3 + khuVuc + doiTuong;

  if (diemMonThu1 <= 0 || diemMonThu2 <= 0 || diemMonThu3 <= 0) {
    ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (diemChuan <= TongDiem) {
    ketQua = "Bạn đã đậu. Tổng điểm: " + TongDiem;
  } else if (diemChuan > TongDiem) {
    ketQua = "Bạn đã rớt tổng điểm: " + TongDiem;
  }

  //kết quả
  getEle("ketQuaTuyenSinh").innerHTML = ketQua;
};

//Bài tập 2: Tính tiền điện

const GIA_BAC_1 = 500;
const GIA_BAC_2 = 650;
const GIA_BAC_3 = 850;
const GIA_BAC_4 = 1100;
const GIA_CON_LAI = 1300;
getEle("btnKetQuaTienDien").onclick = function () {
  //input
  var hoTenB2 = getEle("hoTenB2").value;
  var soKw = getEle("soKw").value * 1;
  //output
  ketQuaTienDien = 0;
  //progress
  if (0 < soKw && soKw <= 50) {
    tienDienBac1 = soKw * GIA_BAC_1;
    ketQuaTienDien =
      "Họ tên: " +
      hoTenB2 +
      " ; Tiền điện: " +
      tienDienBac1.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
  } else if (50 < soKw && soKw <= 100) {
    tienDienBac2 = 50 * GIA_BAC_1 + (soKw - 50) * GIA_BAC_2;
    ketQuaTienDien =
      "Họ tên: " +
      hoTenB2 +
      " ; Tiền điện: " +
      tienDienBac2.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
  } else if (100 < soKw && soKw <= 200) {
    tienDienBac3 = 50 * GIA_BAC_1 + 50 * GIA_BAC_2 + (soKw - 100) * GIA_BAC_3;
    ketQuaTienDien =
      "Họ tên: " +
      hoTenB2 +
      " ; Tiền điện: " +
      tienDienBac3.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
  } else if (200 < soKw && soKw <= 350) {
    tienDienBac4 =
      50 * GIA_BAC_1 +
      50 * GIA_BAC_2 +
      100 * GIA_BAC_3 +
      (soKw - 200) * GIA_BAC_4;
    ketQuaTienDien =
      "Họ tên: " +
      hoTenB2 +
      " ; Tiền điện: " +
      tienDienBac4.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
  } else if (350 < soKw) {
    giaTienConLai =
      50 * GIA_BAC_1 +
      50 * GIA_BAC_2 +
      100 * GIA_BAC_3 +
      150 * GIA_BAC_4 +
      (soKw - 350) * GIA_CON_LAI;
    ketQuaTienDien =
      "Họ tên: " +
      hoTenB2 +
      " ; Tiền điện: " +
      giaTienConLai.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
  } else {
    alert("Số kw không hợp lệ vui lòng nhập lại");
    ketQuaTienDien = "Họ tên: " + hoTenB2 + " ; Tiền điện: 0";
  }

  //Kết quả
  getEle("ketQuaTinhTienDien").innerHTML = ketQuaTienDien;
};

//Bài tập 3:

getEle("btnTinhTienThue").onclick = function () {
  //input

  var hoTenB3 = getEle("hoTenB3").value;
  var tongThuNhap = getEle("tongThuNhap").value * 1;
  var soNguoiPhuThuoc = getEle("soNguoiPhuThuoc").value * 1;

  var soNguoiPhuThuoc = soNguoiPhuThuoc * 1600000;
  var hoTenB3 = "Họ tên: " + hoTenB3 + " ;";
  //output
  ketQuaTinhThue = 0;
  //progress
  if (4000000 < tongThuNhap && tongThuNhap <= 64000000) {
    thueXuat5 = (
      (tongThuNhap - 4000000 - soNguoiPhuThuoc) *
      0.05
    ).toLocaleString();

    ketQuaTinhThue = hoTenB3 + " Tiền thuế thu nhập cá nhân: " + thueXuat5;
  } else if (64000000 < tongThuNhap && tongThuNhap <= 120000000) {
    thueXuat10 = (
      64000000 * 0.05 +
      (tongThuNhap - 64000000 - soNguoiPhuThuoc) * 0.1
    ).toLocaleString();

    ketQuaTinhThue = hoTenB3 + " Tiền thuế thu nhập cá nhân: " + thueXuat10;
  } else if (120000000 < tongThuNhap && tongThuNhap <= 210000000) {
    thueXuat15 = (
      64000000 * 0.05 +
      56000000 * 0.1 +
      (tongThuNhap - 120000000 - soNguoiPhuThuoc) * 0.15
    ).toLocaleString;

    ketQuaTinhThue = hoTenB3 + " Tiền thuế thu nhập cá nhân: " + thueXuat15;
  } else if (210000000 < tongThuNhap && tongThuNhap <= 384000000) {
    thueXuat20 = (
      64000000 * 0.05 +
      56000000 * 0.1 +
      190000000 * 0.15 +
      (tongThuNhap - 310000000 - soNguoiPhuThuoc) * 0.2
    ).toLocaleString;

    ketQuaTinhThue = hoTenB3 + " Tiền thuế thu nhập cá nhân: " + thueXuat20;
  } else if (384000000 < tongThuNhap && tongThuNhap <= 624000000) {
    thueXuat25 = (
      60000000 * 0.05 +
      60000000 * 0.1 +
      190000000 * 0.15 +
      74000000 * 0.2 +
      (tongThuNhap - 384000000 - soNguoiPhuThuoc) * 0.25
    ).toLocaleString;

    ketQuaTinhThue = hoTenB3 + " Tiền thuế thu nhập cá nhân: " + thueXuat25;
  } else if (624000000 < tongThuNhap && tongThuNhap <= 960000000) {
    thueXuat30 = (
      60000000 * 0.05 +
      60000000 * 0.1 +
      190000000 * 0.15 +
      74000000 * 0.2 +
      240000000 * 0.25 +
      (tongThuNhap - 624000000 - soNguoiPhuThuoc) * 0.3
    ).toLocaleString;

    ketQuaTinhThue = hoTenB3 + " Tiền thuế thu nhập cá nhân: " + thueXuat30;
  } else if (960000000 < tongThuNhap) {
    thueXuat35 = (
      60000000 * 0.05 +
      60000000 * 0.1 +
      190000000 * 0.15 +
      74000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (tongThuNhap - 960000000 - soNguoiPhuThuoc) * 0.35
    ).toLocaleString;

    ketQuaTinhThue = hoTenB3 + " Tiền thuế thu nhập cá nhân: " + thueXuat35;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
    ketQuaTinhThue = hoTenB3 + " Tiền thuế thu nhập cá nhân: 0 ";
  }

  //kết quả
  getEle("ketQuaTinhTienThue").innerHTML = ketQuaTinhThue;
};

//Bài tập 4: Tính tiền cáp
// Ô nhập số kết nối khi nhập loại khách hàng
getEle("showKenh").style.display = "none";
function myFunction() {
  var mySelect = +getEle("mySelect").value;

  if (mySelect == 1 || mySelect == 0) {
    getEle("showKenh").style.display = "none";
  } else {
    getEle("showKenh").style.display = "block";
  }
}

// Tính tiền cáp

// Nhà dân
const PHI_XU_LY_HOA_DON1 = 4.5;
const PHI_DICH_VU_CO_BAN1 = 20.5;
const THUE_KENH_CAO_CAP1 = 7.5;

// Doanh nghiệp
const PHI_XU_LY_HOA_DON2 = 15;
const PHI_DICH_VU_CO_BAN2 = 75;
const THUE_KENH_CAO_CAP2 = 50;

function tinhTienCap() {
  //input
  var maKhachHang = getEle("maKhachHang").value;
  var soKenhCaoCap = getEle("kenhCaoCap").value * 1;
  var soKetNoi = getEle("soKetNoi").value * 1;
  var mySelect = getEle("mySelect").value * 1;

  //output
  var ketQua = 0;

  // Xử lý
  //nhà dân
  if (mySelect == 1 && soKenhCaoCap < 1) {
    ketQua = PHI_XU_LY_HOA_DON1 + PHI_DICH_VU_CO_BAN1;
    ketQua = "Mã khách hàng: " + maKhachHang + " ; Tiền cáp: $" + ketQua;
  } else if (mySelect == 1 && soKenhCaoCap >= 1) {
    ketQua =
      soKenhCaoCap * THUE_KENH_CAO_CAP1 +
      PHI_DICH_VU_CO_BAN1 +
      PHI_XU_LY_HOA_DON1;
    ketQua = "Mã khách hàng: " + maKhachHang + " ; Tiền cáp: $" + ketQua;
  }
  //Doanh nghiệp
  else if (mySelect == 2 && soKenhCaoCap < 1) {
    ketQua = PHI_XU_LY_HOA_DON2 + PHI_DICH_VU_CO_BAN2;
    ketQua = "Mã khách hàng: " + maKhachHang + " ; Tiền cáp: $" + ketQua;
  } else if (mySelect == 2 && soKenhCaoCap >= 1 && soKetNoi <= 10) {
    ketQua =
      soKenhCaoCap * THUE_KENH_CAO_CAP2 +
      PHI_DICH_VU_CO_BAN2 +
      PHI_XU_LY_HOA_DON2;
    ketQua = "Mã khách hàng: " + maKhachHang + " ; Tiền cáp: $" + ketQua;
  } else if (mySelect == 2 && soKetNoi > 10) {
    ketQua =
      soKenhCaoCap * THUE_KENH_CAO_CAP2 +
      (soKetNoi - 10) * 5 +
      PHI_DICH_VU_CO_BAN2 +
      PHI_XU_LY_HOA_DON2;
    ketQua = "Mã khách hàng: " + maKhachHang + " ; Tiền cáp: $" + ketQua;
  } else {
    alert("Vui lòng Chọn khách hàng");
  }
  getEle("ketQuaTinhTienCap").innerHTML = ketQua;
}
