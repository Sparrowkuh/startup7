function selectCake(element) {
    const selectedValue = element.value.split(',');
    const id = selectedValue[0];
    const image = selectedValue[1];
    const price = parseInt(selectedValue[2], 10);

    document.getElementById('selectedImage').src = image;
    updatePrice(price);

    const cakeName = element.options[element.selectedIndex].text;
    localStorage.setItem('selectedCake', cakeName);
}

function selectSize(element) {
    const selectedValue = element.value.split(',');
    const id = selectedValue[0];
    const price = parseInt(selectedValue[1], 10);

    updatePrice(price);

    const sizeName = element.options[element.selectedIndex].text;
    localStorage.setItem('selectedSize', sizeName);
}

function updatePrice(price) {
    const basePrice = 30000; // 기본 케이크 가격
    const totalPrice = basePrice + price;
    document.getElementById('totalPrice').innerText = totalPrice.toLocaleString() + '원';
}

function decreaseQuantity() {
    let quantity = parseInt(document.getElementById('quantity').value);
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').value = quantity;
    }
}

function increaseQuantity() {
    let quantity = parseInt(document.getElementById('quantity').value);
    quantity++;
    document.getElementById('quantity').value = quantity;
}

// document.querySelector('.next-button').addEventListener('click', function () {
//     window.location.href = 'design_page.html'; // 도안 제작 페이지로 이동
// });
