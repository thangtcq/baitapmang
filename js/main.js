var arrayNumber = new Array();
var txtArray = document.getElementById('txtArray');

function getNumber() {
    var number = parseFloat(document.getElementById('inputNum').value);
    if (number >= 0 || number < 0) {
        arrayNumber.push(number);
        txtArray.innerHTML = arrayNumber;
        document.getElementById('inputNum').value = '';
        return true;
    }
    txtArray.innerHTML = 'Vui lòng nhập số!';
}

function deleteArray() {
    arrayNumber = new Array();
    txtArray.innerHTML = '';
}

function sumPositive() {
    var txtSum = document.getElementById('txtSum');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtSum.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    var tong = 0;
    for (var i = 0; i < lenArray; i++) {
        if (arrayNumber[i] > 0) {
            tong = tong + arrayNumber[i];
        }
    }
    txtSum.innerHTML = 'Tổng các số dương trong mảng là: ' + tong + '.';
}

function countPositive() {
    var txtCount = document.getElementById('txtCount');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtCount.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    var dem = 0;
    for (var i = 0; i < lenArray; i++) {
        if (arrayNumber[i] > 0) {
            dem = dem + 1;
        }
    }
    txtCount.innerHTML = 'Số lượng các số dương trong mảng là: ' + dem + '.';
}

function findMin() {
    var txtMin = document.getElementById('txtMin');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtMin.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    var min = arrayNumber[0];
    for (var i = 1; i < lenArray; i++) {
        if (arrayNumber[i] < min) {
            min = arrayNumber[i];
        }
    }

    txtMin.innerHTML = 'Số nhỏ nhất trong mảng là: ' + min + '.';
}

function findMinPos() {
    var txtMinPos = document.getElementById('txtMinPos');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtMinPos.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    var min = 1;
    var flag = false;
    for (var i = 0; i < lenArray; i++) {
        if (arrayNumber[i] <= min && arrayNumber[i] > 0) {
            min = arrayNumber[i];
            flag = true;
        }
    }

    if (flag == true) {
        txtMinPos.innerHTML = 'Số nhỏ nhất trong mảng là: ' + min + '.';
    } else {
        txtMinPos.innerHTML = 'Mảng của bạn không chứa số dương.';
    }
}

function findEven() {
    var txtEven = document.getElementById('txtEven');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtEven.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    var soChan = 1;
    for (var i = lenArray - 1; i >= 0; i--) {
        if (arrayNumber[i] % 2 == 0) {
            soChan = arrayNumber[i];
            break;
        }
    }

    if (soChan != 1) {
        txtEven.innerHTML = 'Số chẵn cuối cùng trong mảng là: ' + soChan + '.';
    } else {
        txtEven.innerHTML = 'Mảng của bạn không chứa số chẵn.';
    }
}

function changePosition() {
    var txtChangePos = document.getElementById('txtChangePos');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtChangePos.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    var viTri1 = parseFloat(document.getElementById('inputIndex1').value);
    var viTri2 = parseFloat(document.getElementById('inputIndex2').value);

    if (viTri1 === viTri2) {
        txtChangePos.innerHTML = '2 vị trí bạn vừa nhập giống nhau.';
        return true;
    }

    if ((viTri1 > 0 && viTri1 <= lenArray) && ((viTri2 > 0 && viTri2 <= lenArray))) {
        var tam = arrayNumber[viTri1 - 1];
        arrayNumber[viTri1 - 1] = arrayNumber[viTri2 - 1];
        arrayNumber[viTri2 - 1] = tam;
        txtChangePos.innerHTML = 'Mảng mới sau khi đổi chỗ 2 vị trí là: ' + arrayNumber + '.';
        return true;
    } else {
        txtChangePos.innerHTML = 'Kiểm tra lại thông tin 2 vị trí vừa nhập.';
    }
}

function sortIncrease() {
    var txtIncrease = document.getElementById('txtIncrease');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtIncrease.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    arrayNumber = arrayNumber.sort();
    txtIncrease.innerHTML = 'Mảng mới sau khi sắp xếp lại là: ' + arrayNumber + '.';
}

function findPrime() {
    var txtPrime = document.getElementById('txtPrime');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtPrime.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    for (var i = 0; i < lenArray; i++) {
        var isSoNguyenTo = hamFindPrime(arrayNumber[i]);
        if (isSoNguyenTo == true) {
            txtPrime.innerHTML = 'Số nguyên tố đầu tiên trong mảng là: ' + arrayNumber[i] + '.';
            return true;
        }
    }
    txtPrime.innerHTML = 'Mảng của bạn không tồn tại số nguyên tố.';
}

function hamFindPrime(n) {
    if (n < 2) return false;
    for (var m = 2; m <= Math.sqrt(n); m++) {
        if (n % m == 0) return false;
    }
    return true;
}

function findInt() {
    var txtInt = document.getElementById('txtInt');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtInt.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    var count = 0;

    for (var i = 0; i < lenArray; i++) {
        if (Number.isInteger(arrayNumber[i]) == true) {
            count = count + 1;
        }
    }

    txtInt.innerHTML = 'Số lượng số nguyên trong mảng: ' + count + '.';
}

function compareNum() {
    var txtCompare = document.getElementById('txtCompare');

    var lenArray = arrayNumber.length;
    if (lenArray == 0) {
        txtCompare.innerHTML = 'Hình như mảng chưa có giá trị thì phải.';
        return true;
    }

    var countSoDuong = 0;
    var countSoAm = 0;

    for (var i = 0; i < lenArray; i++) {
        if (arrayNumber[i] > 0) {
            countSoDuong = countSoDuong + 1;
        } else if (arrayNumber[i] < 0) {
            countSoAm = countSoAm + 1;
        }
    }

    if (countSoDuong > countSoAm) txtCompare.innerHTML = 'Số lượng số dương > số lượng số âm';
    else if (countSoDuong < countSoAm) txtCompare.innerHTML = 'Số lượng số dương < số lượng số âm';
    else txtCompare.innerHTML = 'Số lượng số dương = số lượng số âm';
}